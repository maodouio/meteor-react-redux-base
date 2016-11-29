export default {
  setLanguage(i18n) {
    return { type: 'SET_LANGUAGE', i18n };
  },
  saveConfigs({ Meteor, toastr }, configs) {
    return (disptch) => {
      Meteor.call('core.saveConfigs', configs, (err) => {
        if (err) {
          toastr.error('配置保存失败');
        } else {
          toastr.success('保存配置成功');
        }
      });
    };
  },
  setModuleName({ Meteor, toastr }, e, moduleName, display) {
    return () => {
      e.preventDefault();
      Meteor.call('setModuleName', moduleName, display, (err) => {
        if (err) {
          console.log(err);
          toastr.error('更新模块失败');
        } else {
          toastr.success('更新模块成功');
        }
      });
    };
  }
};
