export default {
  setLanguage(i18n) {
    return { type: 'SET_LANGUAGE', i18n };
  },
  saveConfigs({ Meteor, toastr }, configs) {
    return (disptch) => {
      Meteor.call('core.saveConfigs', configs, (err) => {
        if (err) {
          toastr.error("配置保存失败");
        } else {
          toastr.success("保存配置成功");
        }
      });
    };
  }
};
