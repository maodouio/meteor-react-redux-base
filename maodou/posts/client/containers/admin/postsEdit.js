import { useDeps } from 'react-simple-di';
import {compose, withHandlers, withTracker, withState, withRedux, withLifecycle, composeAll } from 'react-komposer-plus';
import { browserHistory } from 'react-router'
import 'client/lib/plupload/js/moxie';
import 'client/lib/plupload/js/plupload.dev.js';
import 'qiniu-js/dist/qiniu.min';
import { $ } from 'meteor/jquery';
import wangEditor from 'wangeditor';
import PostsEdit from '../../components/admin/postsEdit';

const lifeCycle = {
  // 离开页面时，清除图片url地址
  componentWillUnmount() {
    const {dispatch, addCover} = this.props;
    dispatch(addCover(''));
  },
  componentDidMount() {
    const {qiniuDomain, dispatch, addCover, setState} = this.props;

    Meteor.call('files.token', function(err, token) {
      if (err) {
        alert('初始化图片上传组件失败');
      } else {
        var uploader = Qiniu.uploader({
          runtimes: 'html5,flash,html4',    //上传模式,依次退化
          browse_button: 'pickfiles',       //上传选择的点选按钮，**必需**
          //uptoken_url: '/uptoken',            //Ajax请求upToken的Url，**强烈建议设置**（服务端提供）
          // downtoken_url: '/downtoken',
          // Ajax请求downToken的Url，私有空间时使用,JS-SDK将向该地址POST文件的key和domain,服务端返回的JSON必须包含`url`字段，`url`值为该文件的下载地址
          uptoken : token, //若未指定uptoken_url,则必须指定 uptoken ,uptoken由其他程序生成
          unique_names: true, // 默认 false，key为文件名。若开启该选项，SDK会为每个文件自动生成key（文件名）
          save_key: true,   // 默认 false。若在服务端生成uptoken的上传策略中指定了 `sava_key`，则开启，SDK在前端将不对key进行任何处理
          domain: qiniuDomain,   //bucket 域名，下载资源时用到，**必需**
          get_new_uptoken: false,  //设置上传文件的时候是否每次都重新获取新的token
          container: 'upload-container',           //上传区域DOM ID，默认是browser_button的父元素，
          max_file_size: '100mb',           //最大文件体积限制
          flash_swf_url: 'Moxie.swf',  //引入flash,相对路径
          max_retries: 3,                   //上传失败最大重试次数
          dragdrop: true,                   //开启可拖曳上传
          drop_element: 'upload-container',        //拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
          chunk_size: '4mb',                //分块上传时，每片的体积
          auto_start: true,                 //选择文件后自动上传，若关闭需要自己绑定事件触发上传,
          //x_vars : {
          //    自定义变量，参考http://developer.qiniu.com/docs/v6/api/overview/up/response/vars.html
          //    'time' : function(up,file) {
          //        var time = (new Date()).getTime();
          // do something with 'time'
          //        return time;
          //    },
          //    'size' : function(up,file) {
          //        var size = file.size;
          // do something with 'size'
          //        return size;
          //    }
          //},
          init: {
            'FilesAdded': function(up, files) {
              plupload.each(files, function(file) {
                // 文件添加进队列后,处理相关的事情
              });
            },
            'BeforeUpload': function(up, file) {
              // 每个文件上传前,处理相关的事情
              console.log('img begin to upload!');
              setState({ beginUpload: true, fileUploaded: false});
            },
            'UploadProgress': function(up, file) {
              // 每个文件上传时,处理相关的事情
            },
            'FileUploaded': function(up, file, info) {
              // 每个文件上传成功后,处理相关的事情
              // 其中 info 是文件上传成功后，服务端返回的json，形式如
              // {
              //    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
              //    "key": "gogopher.jpg"
              //  }
              // 参考http://developer.qiniu.com/docs/v6/api/overview/up/response/simple-response.html
              setState({ beginUpload: false, fileUploaded: true});

              const domain = up.getOption('domain');
              const sourceLink = domain + JSON.parse(info).key; //获取上传成功后的文件的Url
              dispatch(addCover(sourceLink));
            },
            'Error': function(up, err, errTip) {
              //上传出错时,处理相关的事情
            },
            'UploadComplete': function() {
              //队列文件处理完毕后,处理相关的事情
              setState({ beginUpload: false, fileUploaded: false});
            },
            // 'Key': function(up, file) {
            //   // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
            //   // 该配置必须要在 unique_names: false , save_key: false 时才生效
            //
            //   var key = "";
            //   // do something with key here
            //   return key
            // }
          }
        });
      }
    });
    // 初始化七牛上传
    function uploadInit(){
      // this 即 editor 对象
      // 触发选择文件的按钮的id
      const editor = this;
      const btnId = editor.customUploadBtnId;
      // 触发选择文件的按钮的父容器的id
      const containerId = editor.customUploadContainerId;
      console.log(btnId, containerId);
      Meteor.call('files.token', function(err, token) {
        if (err) {
          alert('初始化图片上传组件失败');
        } else {
          // 创建上传对象
          var uploader = Qiniu.uploader({
            runtimes: 'html5,flash,html4', //上传模式,依次退化
            browse_button: btnId, //上传选择的点选按钮，**必需**
            uptoken: token,
            domain: qiniuDomain,
            container: containerId, //上传区域DOM ID，默认是browser_button的父元素，
            max_file_size: '100mb', //最大文件体积限制
            flash_swf_url: 'Moxie.swf', //引入flash,相对路径
            filters: {
              mime_types: [
                //只允许上传图片文件 （注意，extensions中，逗号后面不要加空格）
                { title: "图片文件", extensions: "jpg,gif,png,bmp" }
              ]
            },
            max_retries: 3, //上传失败最大重试次数
            dragdrop: true, //开启可拖曳上传
            drop_element: containerId, //拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
            chunk_size: '4mb', //分块上传时，每片的体积
            auto_start: true, //选择文件后自动上传，若关闭需要自己绑定事件触发上传
            init: {
              'FilesAdded': function(up, files) {
                plupload.each(files, function(file) {
                  // 文件添加进队列后,处理相关的事情
                });
              },
              'BeforeUpload': function(up, file) {
                // 每个文件上传前,处理相关的事情
                console.log('ddddd');
              },
              'UploadProgress': function(up, file) {
                // 显示进度条
                editor.showUploadProgress(file.percent);
              },
              'FileUploaded': function(up, file, info) {
                // 每个文件上传成功后,处理相关的事情
                // 其中 info 是文件上传成功后，服务端返回的json，形式如
                // {
                //    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
                //    "key": "gogopher.jpg"
                //  }
                // 参考http://developer.qiniu.com/docs/v6/api/overview/up/response/simple-response.html

                var domain = up.getOption('domain');
                var res = $.parseJSON(info);
                var sourceLink = domain + res.key; //获取上传成功后的文件的Url

                // 插入图片到editor
                editor.command(null, 'insertHtml', '<img src="' + sourceLink + '" style="max-width:100%;"/>')
              },
              'Error': function(up, err, errTip) {
                //上传出错时,处理相关的事情
              },
              'UploadComplete': function() {
                  //队列文件处理完毕后,处理相关的事情

                  // 隐藏进度条
                  editor.hideUploadProgress();
                }
            }
          });
        }
      });
    }
    this.editor = new wangEditor('editor');
    this.editor.config.customUpload = true;
    this.editor.config.customUploadInit = uploadInit;
    this.editor.config.menuFixed = false;
    this.editor.create();
  }
};

const initData = ({ context, params }, onData) => {
  const { Meteor, Collections, toastr } = context;
  const postId = params.id;
  Meteor.call('posts.get.single', postId, (err, post) => {
    if (err) {
      if (err.error === '404'){
        toastr.error("文章没有找到,返回到原来页面");
        browserHistory.push('admin/posts/list');
      }
    } else {
      document.title = post.title;
      const pkg = Collections.Packages.findOne({ name: 'posts' }) || {};
      const configs = pkg.configs || {};
      onData(null, {
        data: {categories: configs.categories, post }
      });
    }
  });
  // onData(null, {});
};

const mapStateToProps = (state)=> ({
  coverUrl: state.postTmpCover
});

const state = () => ({
  beginUpload: false,
  fileUploaded: false,
});

const depsToProps = (context, actions) => ({
  context,
  dispatch: context.dispatch,
  qiniuDomain: context.configs.core.qiniu.DOMAIN_NAME,
  addCover: actions.posts.addCover,
  updatePost: actions.posts.updatePost
});

export default composeAll(
  withLifecycle(lifeCycle),
  withTracker(initData),
  withState(state),
  withRedux(mapStateToProps),
  useDeps(depsToProps)
)(PostsEdit);
