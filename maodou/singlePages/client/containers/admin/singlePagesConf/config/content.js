import { useDeps } from 'react-simple-di';
import { composeAll, withLifecycle, withTracker, withRedux } from 'react-komposer-plus';
import 'client/lib/plupload/js/moxie';
import 'client/lib/plupload/js/plupload.dev.js';
import 'qiniu-js/dist/qiniu.min';
import _ from 'lodash';
import { $ } from 'meteor/jquery';
import wangEditor from 'wangeditor';
import Content from '../../../../components/admin/singlePagesConf/config/content';

const lifeCycle = {
  componentDidMount() {
    const { qiniuDomain, content } = this.props;

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
    this.editor.$txt.html(content);
  },
  componentDidUpdate() {
    const { content } = this.props;
    this.editor.$txt.html(content);
  },
  componentWillUnmount() {
    const { dispatch, selectSection } = this.props;
    dispatch(selectSection(''));
  }
};

const data = (data, onData) => {
  const { Meteor, Collections } = data.context;
  const { selectedSection } = data;

  if (Meteor.subscribe('singlePages.selected').ready()) {

    const singlePage = Collections.SinglePages.findOne({ selected: true });

    const { content } = _.find(singlePage.sections, { 'name': selectedSection });

    onData(null, {
      content
    });
  }
};

const mapStateToProps = ({ selectedSection }) => ({
  selectedSection
});


const depsToProps = (context, actions) => ({
  context,
  dispatch: context.dispatch,
  qiniuDomain: context.configs.core.qiniu.DOMAIN_NAME,
  selectSection: actions.singlePages.selectSection,
});

export default composeAll(
  withLifecycle(lifeCycle),
  withTracker(data),
  withRedux(mapStateToProps),
  useDeps(depsToProps)
)(Content);
