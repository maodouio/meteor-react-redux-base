import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';

function createReduxStore(options) {
  const {
    reducers = {},
    middlewares = [],
  } = options;

  if (!createStore || !combineReducers || !applyMiddleware) {
    const error = 'Redux is missing. Please install Redux, npm install --save redux';
    throw new Error(error);
  }

  if (Object.keys(reducers).length > 0) {
    const combinedReducers = combineReducers(reducers);
    const Store = createStore(
      combinedReducers,
      compose(
        applyMiddleware(...middlewares),
        window.devToolsExtension ? window.devToolsExtension() : f => f,
      )
    );

    return Store;
  }

  return null;
}

export default function(options) {
  const {
    reducers = {},
    middlewares = [],
    storeName = 'Store',
  } = options;

  return {
    moduleWillLoad(module) {
      if (module.reducers) {
        if (typeof reducers !== 'object' || typeof module.reducers !== 'object') {
          const message = "Module's reducers field should be a map of reducers.";
          throw new Error(message);
        }

        this._reduxReducers = {
          ...this._reduxReducers,
          ...module.reducers,
          ...reducers,
        };
      }
    },
    moduleWillInit() {
      if (_.isEmpty(this._reduxReducers)) {
        throw new Error('Can\'t create store without any reducers');
      }
      let allReducers = this._reduxReducers;
      let allMiddlewares = [ ...middlewares ];

      if (this._apolloReducer) {
        allReducers = {
          ...allReducers,
          apollo: this._apolloReducer,
        };
      }

      if (this._apolloMiddleware) {
        allMiddlewares = [
          ...allMiddlewares,
          this._apolloMiddleware,
        ];
      }

      const reduxStore = createReduxStore({
        reducers: allReducers,
        middlewares: allMiddlewares,
      });

      this.context[storeName] = reduxStore;
      this.context.dispatch = reduxStore.dispatch;
    },
  };
}
