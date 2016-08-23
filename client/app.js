import {injectDeps} from 'react-simple-di';
import {combineReducers, createStore} from 'redux';

// TODO:
// 1. allow modules to extend context (but overrides are not allowed)
// 2. decide whether Immutable.js should be used for redux store
// 3. allow modules to save subsets of redux store to localStorage

export default class {
  constructor(context) {
    if (!context) {
      const message = `Context is required when creating a new app.`;
      throw new Error(message);
    }

    this.context = context;
    this.actions = {};
    this._initFns = [];
    this._reducers = {};
  }

  _bindContext(_actions) {
    const actions = {};
    for (let key in _actions) {
      if (_actions.hasOwnProperty(key)) {
        const actionMap = _actions[key];
        const newActionMap = {};
        for (let actionName in actionMap) {
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

  loadModule(module, config) {
    this._checkForInit();

    if (!module) {
      const message = `Should provide a module to load.`;
      throw new Error(message);
    }

    if (module.__loaded) {
      const message = `This module is already loaded.`;
      throw new Error(message);
    }

    if (module.init) {
      if (typeof module.init !== 'function') {
        const message = `Module's init field should be a function.`;
        throw new Error(message);
      }

      this._initFns.push(module.init.bind(null, config));
    }

    const actions = module.actions || {};
    this.actions = {
      ...this.actions,
      ...actions
    };

    const reducers = module.reducers || {};
    this._reducers = {
      ...this._reducers,
      ...reducers
    };

    if (module.load) {
      if (typeof module.load !== 'function') {
        const message = `module.load should be a function`;
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

    const reducers = this._reducers;
    if (Object.keys(reducers).length > 0) {
      const combined = combineReducers(reducers);
      this.context.ReduxStore = createStore(combined, {}, window.devToolsExtension && window.devToolsExtension());
    }

    for (const initFn of this._initFns) {
      const inject = comp => {
        return injectDeps(this.context, this.actions)(comp);
      };

      initFn(inject, this.context, this._bindContext(this.actions));
    }

    this._reducers = {};
    this._initFns = [];
    this.__initialized = true;
  }

  _checkForInit() {
    if (this.__initialized) {
      const message = `App is already initialized`;
      throw new Error(message);
    }
  }
}
