import toastr from 'toastr';

export default {
  shortText(text) {
    return text.length > 10 ? `${text.slice(0,10)}...` : text;
  },
  handlePostError(err) {
    switch(err.reason) {
      case 'Title is required':
        toastr.info('请先添加文章标题');
        break;
      case 'Cover url is required':
        toastr.info('请先添加封面图片');
        break;
      case 'Author is required':
        toastr.info('请先添加文章作者');
        break;
      default:
        toastr.error('发布失败');
    }
  },
  handleEventError(err) {
    switch(err.reason) {
      case 'Title is required':
        toastr.info('发布失败，请先添加活动标题');
        break;
      case 'Cover url is required':
        toastr.info('发布失败，请先添加活动封面');
        break;
      case 'Time is required':
        toastr.info('发布失败，请先添加活动日期');
        break;
      case 'Location is required':
        toastr.info('发布失败，请先添加活动地点');
        break;
      case 'Fee is required':
        toastr.info('发布失败，请先添加活动费用');
        break;
      case 'Limit is required':
        toastr.info('发布失败，请先添加活动人数限制');
        break;
      case 'Limit must be a number':
        toastr.info('发布失败，活动人数限制必须是数字');
        break;
      default:
        toastr.error('发布失败');
    }
  }
};
