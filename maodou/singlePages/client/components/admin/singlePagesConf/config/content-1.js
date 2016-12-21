import React, { Component, PropTypes } from 'react';

export default class Content extends Component {
  render () {
    const { content } = this.props;

    return (
      <div className="col-sm-8 col-md-8">
        <div className='container editor'>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
      </div>
    );
  }
}

Content.propTypes = {
  content: PropTypes.string
};
