export default {
  moduleWillLoad(module) {
    if (module.name) {
      if (typeof module.name !== 'string') {
        const message = "Module's name field should be a string.";
        throw new Error(message);
      }
      this._configs = this._configs || {};
      const moduleConfig = require(`/lib/configs/${module.name}`) || { default: {} };
      this._configs[module.name] = moduleConfig.default;
      if (this.context.Meteor.isServer) {
        this._privateConfigs = this._privateConfigs || {};
        const serverModuleConfig = require(`/server/configs/${module.name}`) || { default: {} };
        this._privateConfigs[module.name] = serverModuleConfig.default;
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
