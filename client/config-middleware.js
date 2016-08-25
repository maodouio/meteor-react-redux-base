export default {
  moduleWillLoad(module) {
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
    this._initFns.forEach(fn => fn(this.context, this.actions));
  }
};
