import {Picker} from 'meteor/meteorhacks:picker';

export default {
  moduleWillLoad(module) {
    if (module.middleware) {
      if (typeof module.middleware !== 'function') {
        const message = 'Module\'s middleware field should be an function.';
        throw new Error(message);
      }
      this._middlewareFns = this._middlewareFns || [];
      this._middlewareFns.push(module.middleware);
    }
  },

  moduleWillInit() {
    this._middlewareFns && this._middlewareFns.forEach(middlewareFn => Picker.middleware(middlewareFn(this.context)));
  }
};
