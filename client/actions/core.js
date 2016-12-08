export default {
  setLanguage(i18n) {
    return { type: 'SET_LANGUAGE', i18n };
  },
  selectedTab(tabName) {
    return { type: 'SELECTEDTAB', tabName};
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
  setModuleName({ Meteor, toastr, Collections }, e, moduleName, display) {
    return () => {
      e.preventDefault();
      const limit = Collections.Packages.find({display: true, name: {$ne: 'core'}}).fetch();
      const module = Collections.Packages.findOne({name: moduleName});
      if (!module.display && limit.length>3) {
        toastr.error('最多选择4个模块');
        return null;
      }
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
