export default {
  setLanguage(i18n) {
    return { type: 'SET_LANGUAGE', i18n };
  },
  saveConfigs({ Meteor, swal }, configs) {
    return (disptch) => {
      Meteor.call('core.saveConfigs', configs, (err) => {
        if (err) {
          swal({
            title: "配置保存失败",
            text: err.message,
            type: "error"
          });
        } else {
          swal({
            title: "配置保存成功",
            type: "success"
          });
        }
      });
    };
  }
};
