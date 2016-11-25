import React, { Component, PropTypes} from 'react';

import Preview from '../../../containers/admin/singlePagesConf/preview';
import Config from '../../../containers/admin/singlePagesConf/config';

export default class SinglePagesConf extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPrev: false,
    };
  }

  render() {
    const { templateName } = this.props;

    return (
      <div className="admin-package-wrapper row">
        <h2 style={{paddingBottom: '10px', textAlign: 'center'}}>
          {templateName}模板配置
          {this.renderButton()}
        </h2>
        { this.state.isPrev ? <Preview /> : <Config /> }
      </div>
    );
  }

  handleReturnPrev(e) {
    e.preventDefault();

    const { dispatch, selectedSection, changeReturnPrev, selectSection } = this.props;
    dispatch(changeReturnPrev(selectedSection, () => {
      this.setState({isPrev: !this.state.isPrev});
      dispatch(selectSection(''));
    }));
  }

  renderButton() {
    if (this.state.isPrev) {
      return <span>
        <button
          className='btn btn-danger'
          style={{marginLeft: '10px'}}
          onClick={() => this.setState({isPrev: !this.state.isPrev})}>
          开始配置
        </button>
        {/* button
          className='btn btn-danger'
          style={{marginLeft: '10px'}}
          onClick={(e) => this.handleRevert(e)}>
          一键还原
        </button>*/}
      </span>;
    }
    return <button
      className='btn btn-danger'
      style={{marginLeft: '10px'}}
      onClick={(e) => this.handleReturnPrev(e)}>
      回到预览
    </button>;
  }
}

SinglePagesConf.propTypes = {
  dispatch: PropTypes.func,
  templateName: PropTypes.string,
  selectedSection: PropTypes.string,
  changeReturnPrev: PropTypes.func,
  selectSection: PropTypes.func,
};
