export default () => {
  return {
    moduleWillLoad(module) {
      if (module.collections) {
        if (typeof module.collections !== 'object') {
          const message = 'Module\'s collections field should be an object.';
          throw new Error(message);
        }
        this._collections = this._collections || {};
        Object.assign(this._collections, module.collections);
      }
    },

    moduleWillInit() {
      this.context.Collections = this._collections;
    }
  };
};
