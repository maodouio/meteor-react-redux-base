import React, { Component, PropTypes} from 'react';

export default class Preview extends Component {
  render () {
    const { sections } = this.props;

    return (
      <div className="col-sm-12 col-md-12">
        <div id='summernote' className='container'>
          {sections.map((section) =>
            this.renderContent(section)
          )}
        </div>
      </div>
    );
  }

  renderContent(section) {
    return section.display ?
    <div dangerouslySetInnerHTML={{ __html: section.content }} key={section.name}></div> :
    null;
  }
}

Preview.propTypes = {
  sections: PropTypes.array
};
