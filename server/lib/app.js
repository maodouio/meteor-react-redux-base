class App {
  constructor(context) {
    if (!context) {
      const message = 'Context is required when creating a new app.';
      throw new Error(message);
    }

    this.context = context;
    this._permissionFns = [];
    this._publicationFns = [];
    this._methodFns = [];
    this._moduleWillLoad = [];
    this._moduleWillInit = [];
  }

  loadMiddlewares(middlewares) {
    this._checkForInit();

    if (!middlewares) {
      const message = 'Should provide at least one middleware';
      throw new Error(message);
    }

    if (!middlewares instanceof Array) {
      const message = 'Middlewares must be in an array';
      throw new Error(message);
    }

    middlewares.forEach((middleware) => {
      if (!middleware instanceof Object) {
        const message = 'Middlewares must be an object';
        throw new Error(message);
      }

      if (middleware.moduleWillLoad) {
        if (typeof middleware.moduleWillLoad !== 'function') {
          const message = 'moduleWillLoad should be a function';
          throw new Error(message);
        }

        this._moduleWillLoad.push(middleware.moduleWillLoad);
      }

      if (middleware.moduleWillInit) {
        if (typeof middleware.moduleWillInit !== 'function') {
          const message = 'moduleWillLoad should be a function';
          throw new Error(message);
        }

        this._moduleWillInit.push(middleware.moduleWillInit);
      }
    });
  }

  loadModule(module) {
    this._checkForInit();

    if (!module) {
      const message = 'Should provide at least one module to load.';
      throw new Error(message);
    }

    if (module.__loaded) {
      const message = 'This module is already loaded.';
      throw new Error(message);
    }

    // load permissions
    if (module.permissions) {
      if (typeof module.permissions !== 'function') {
        const message = "Module's permissions field should be a function.";
        throw new Error(message);
      }
      this._permissionFns.push(module.permissions);
    }

    // load publications
    if (module.publications) {
      if (typeof module.publications !== 'function') {
        const message = "Module's publications field should be a function.";
        throw new Error(message);
      }
      this._publicationFns.push(module.publications);
    }

    // load methods
    if (module.methods) {
      if (typeof module.methods !== 'function') {
        const message = "Module's methods field should be a function.";
        throw new Error(message);
      }
      this._methodFns.push(module.methods);
    }

    // load middlewares
    if (this._moduleWillLoad.length > 0) {
      const middlewares = this._moduleWillLoad;
      middlewares.forEach((middleware) => {
        middleware.call(this, module, this.context);
      });
    }

    // load other stuffs
    if (module.load) {
      if (typeof module.load !== 'function') {
        const message = 'module.load should be a function';
        throw new Error(message);
      }
      module.load(this.context);
    }

    module.__loaded = true;
  }

  init() {
    this._checkForInit();

    if (this._moduleWillInit.length > 0) {
      const middlewares = this._moduleWillInit;
      for (const middleware of middlewares) {
        middleware.call(this);
      }
    }

    for (const permissionFn of this._permissionFns) {
      permissionFn(this.context);
    }

    for (const publicationFn of this._publicationFns) {
      publicationFn(this.context);
    }

    for (const methodFn of this._methodFns) {
      methodFn(this.context);
    }

    this._permissionFns = [];
    this._publicationFns = [];
    this._methodFns = [];
    this._moduleWillLoad = [];
    this._moduleWillInit = [];
    this.__initialized = true;
  }

  _checkForInit() {
    if (this.__initialized) {
      const message = 'App is already initialized';
      throw new Error(message);
    }
  }
}

export default App;
