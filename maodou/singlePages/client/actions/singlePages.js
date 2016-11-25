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
          toastr.success('成功', 'Success!');
        }
      });
    };
  },
  changeContent({ Meteor, swal, toastr }, sectionName) {
    return () => {
      const content = $('.editor').summernote('code');
      Meteor.call('singlePages.changeContent', sectionName, content, (err) => {
        if (err) {
          // swal({
          //   title: '内容替换失败',
          //   text: err.reason,
          //   type: 'error',
          // });
          toastr.error('失败', 'Error!');
        } else {
          // swal({
          //   title: '内容替换成功',
          //   type: 'success',
          // });
          toastr.success('成功', 'Success!');
        }
      });
    };
  },
  changeReturnPrev({ Meteor, swal }, sectionName, callback) {
    return () => {
      const content = $('.editor').summernote('code');
      Meteor.call('singlePages.changeReturnPrev', sectionName, content, (err) => {
        if (err) {
          swal({
            title: '错误信息',
            text: err.reason,
            type: 'error',
          });
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
          toastr.error('更换模板失败', 'Error!');
        } else {
          toastr.success('更换模板成功', 'Success!');
        }
      });
    };
  },
  changeLogoName({ Meteor, toastr }, logoName) {
    return () => {
      Meteor.call('singlePages.changeLogoName', logoName, (err) => {
        if (err) {
          toastr.error('更换模板失败', 'Error!');
        } else {
          toastr.success('更换模板成功', 'Success!');
        }
      });
    };
  },
  changeHeadTitle({ Meteor, toastr }, headTitle) {
    return () => {
      Meteor.call('singlePages.changeHeadTitle', headTitle, (err) => {
        if (err) {
          toastr.error('更换模板失败', 'Error!');
        } else {
          toastr.success('更换模板成功', 'Success!');
        }
      });
    };
  },
  changeToOrigin({ Meteor, swal }) {
    return () => {
      Meteor.call('singlePages.changeToOrigin', (err) => {
        if (err) {
          swal({
            title: '模板还原失败',
            type: 'error',
          });
        } else {
          swal({
            title: '模板还原成功',
            type: 'success',
          });
        }
      });
    };
  },
};
