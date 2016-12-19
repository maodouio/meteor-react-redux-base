import React, { Component, PropTypes } from 'react';
import wangEditor from 'wangeditor';
import { $ } from 'meteor/jquery';

export default class Content extends Component {
  render () {
    return (
      <div className="col-sm-12 col-md-8">
        <div className='container editor' id='editor' style={style} contentEditable="true">
        </div>
      </div>
    );
  }
}

Content.propTypes = {
  content: PropTypes.string
};

// 编辑器样式
const style = {
  width: '100%',
  height: '800px'
};
// <div dangerouslySetInnerHTML={{ __html: content }}></div>
