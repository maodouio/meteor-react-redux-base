export default {
  saveConfigs({ Meteor, toastr }, configs) {
    return (disptch) => {
      Meteor.call('wechat.saveConfigs', configs, (err) => {
        if (err) {
          toastr.error("配置保存失败");
        } else {
          toastr.success("保存配置成功");
        }
      });
    };
  }
};
