export default {
  moduleWillLoad(module) {
    if (!module.configs) {
      const message = "Module must have a configs field";
      throw new Error(message);
    }
    if (module.configs) {
      if (typeof module.configs !== 'object') {
        const message = "Module's configs field should be an object.";
        throw new Error(message);
      }
      this._configs = this._configs || {};
      Object.assign(this._configs, module.configs);

      if (this.context.Meteor.isServer) {
        if (module.privateConfigs) {
          if (typeof module.privateConfigs !== 'object') {
            const message = "Module's privateConfigs field should be an object.";
            throw new Error(message);
          }
          this._privateConfigs = this._privateConfigs || {};
          Object.assign(this._privateConfigs, module.privateConfigs);
        }
      }
    }
    if (module.init) {
      if (typeof module.init !== 'function') {
        const message = "Module's init field should be a function.";
        throw new Error(message);
      }

      if (!this._initFns) this._initFns = [];
      this._initFns.push(module.init);
    }
  },

  moduleWillInit() {
    this.context.configs = this._configs;
    if (this._initFns && this.context.Meteor.isClient) {
      this._initFns.forEach(fn => fn(this.context, this.actions));
    } else if (this._initFns && this.context.Meteor.isServer) {
      this.context.privateConfigs = this._privateConfigs;
      this._initFns.forEach(fn => fn(this.context));
    }
  }
};
