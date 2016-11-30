import { $ } from 'meteor/jquery';

// import { browserHistory } from 'react-router';
export default {
  // pure actions
  selectSection({ Meteor, toastr }, sectionName) {
    return { type: 'SELECT_SECTION', sectionName };
  },

  // redux thunk
  handleDisplay({ Meteor, toastr }, e, sectionName, display) {
    return () => {
      e.preventDefault();
      Meteor.call('singlePages.handleDisplay', sectionName, display, (err) => {
        if (err) {
          console.log(err);
          toastr.error('失败', 'Error!');
        } else {
          toastr.success('成功', 'Success!');
        }
      });
    };
  },
  changeSectionName({ Meteor, toastr }, sectionName, newName) {
    return () => {
      Meteor.call('singlePages.changeSectionName', sectionName, newName, (err) => {
        if (err) {
          toastr.error('失败', 'Error!');
        } else {
          // toastr.success('成功', 'Success!');
        }
      });
    };
  },
  changeContent({ Meteor, swal, toastr }, sectionName) {
    return () => {
      const content = $('.editor').summernote('code');
      Meteor.call('singlePages.changeContent', sectionName, content, (err) => {
        if (err) {
          toastr.error('失败', 'Error!');
        } else {
          toastr.success('成功', 'Success!');
        }
      });
    };
  },
  changeReturnPrev({ Meteor, toastr }, sectionName, callback) {
    return () => {
      const content = $('.editor').summernote('code');
      Meteor.call('singlePages.changeReturnPrev', sectionName, content, (err) => {
        if (err) {
          toastr.error(`错误信息:${err.reason}`);
        } else {
          // $('.editor').summernote('disable');
          callback();
        }
      });
    };
  },
  setTemplate({ Meteor, toastr }, e, templateName) {
    return () => {
      e.preventDefault();
      Meteor.call('setTemplate', templateName, (err) => {
        if (err) {
          console.log(err);
          toastr.error('更换模板失败');
        } else {
          toastr.success('更换模板成功');
        }
      });
    };
  },
  changeLogoName({ Meteor, toastr }, logoName) {
    return () => {
      Meteor.call('singlePages.changeLogoName', logoName, (err) => {
        if (err) {
          toastr.error('更新网站名称失败');
        } else {
          // toastr.success('更新网站名称成功');
        }
      });
    };
  },
  changeHeadTitle({ Meteor, toastr }, headTitle) {
    return () => {
      Meteor.call('singlePages.changeHeadTitle', headTitle, (err) => {
        if (err) {
          toastr.error('更新网站title失败');
        } else {
          // toastr.success('更新网站title成功');
        }
      });
    };
  },
  changeToOrigin({ Meteor, toastr }) {
    return () => {
      Meteor.call('singlePages.changeToOrigin', (err) => {
        if (err) {
          toastr.error('模板还原失败');
        } else {
          toastr.success('模板还原成功');
        }
      });
    };
  },
};
