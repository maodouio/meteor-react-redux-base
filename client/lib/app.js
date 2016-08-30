import { injectDeps } from 'react-simple-di';

class App {
  constructor(context) {
    if (!context) {
      const message = 'Context is required when creating a new app.';
      throw new Error(message);
    }

    this.context = context;
    this.actions = {};
    this._components = {};
    this._routeFns = [];
    this._moduleWillLoad = [];
    this._moduleWillInit = [];
  }

  _bindContext(_actions) {
    const actions = {};
    for (const key in _actions) {
      if (_actions.hasOwnProperty(key)) {
        const actionMap = _actions[key];
        const newActionMap = {};
        for (const actionName in actionMap) {
          if (actionMap.hasOwnProperty(actionName)) {
            newActionMap[actionName] =
              actionMap[actionName].bind(null, this.context);
          }
        }
        actions[key] = newActionMap;
      }
    }

    return actions;
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

    // load components
    if (module.components) {
      if (typeof module.components !== 'object') {
        const message = "Module's components field should be an object.";
        throw new Error(message);
      }

      Object.assign(this._components, module.components);
    }

    // load routes
    if (module.routes) {
      if (typeof module.routes !== 'function') {
        const message = "Module's routes field should be a function.";
        throw new Error(message);
      }

      this._routeFns.push(module.routes);
    }

    // load middlewares
    if (this._moduleWillLoad.length > 0) {
      const middlewares = this._moduleWillLoad;
      middlewares.forEach((middleware) => {
        // module.actions doesn't have context binded.
        // to use actions, context needs to be passed in
        // manually like this:
        // module.action.todo.someAction(context, actionArgs);
        middleware.call(this, module, this.context);
      });
    }

    // load actions
    const actions = module.actions || {};
    this.actions = {
      ...this.actions,
      ...actions,
    };

    // load other stuffs
    if (module.load) {
      if (typeof module.load !== 'function') {
        const message = 'module.load should be a function';
        throw new Error(message);
      }

      // This module has no access to the actions loaded after this module.
      const boundedActions = this._bindContext(this.actions);
      module.load(this.context, boundedActions);
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

    if (this._components) {
      for (const key in this._components) {
        if(this._components.hasOwnProperty(key)) {
          this._components[key] = this._components[key](this.context, this.actions);
        }
      }
      this.context.components = this._components;
    }

    for (const routeFn of this._routeFns) {
      const inject = comp => (
        injectDeps(this.context, this.actions)(comp)
      );

      routeFn(inject, this.context, this.actions);
    }

    this._routeFns = [];
    this._modulesWillLoad = [];
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
