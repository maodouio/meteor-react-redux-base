import React, { Component, PropTypes } from 'react';
import Loading from 'client/components/common/loading';
import _ from 'lodash';

export default class SinglePagesList extends Component {
  constructor (props) {
    super(props);
    const selected = _.find(props.singlePages, { 'selected': true });
  }

  render () {
    const { singlePages } = this.props;

    if (singlePages.length < 0) {
      return <Loading />;
    }

    return (
      <div className='admin-package-wrapper row'>
        <div className='col-md-12'>
          <h1>选择模板</h1>
          {/* <form onSubmit={(e) => this.handleSubmit(e)}> */}
            <div className='row'>
              {this.renderSinglePages(singlePages)}
            </div>
            <br />
          {/*  <button className='btn btn-success' type='submit'>确认</button> */}
          {/* </form> */}
        </div>
      </div>
    );
  }

  renderSinglePages (singlePages) {
    return singlePages.map((singlePage, index) => {
      const { templateName, preview, selected } = singlePage;
      return (
        <div className='col-md-3' key={index}>
          <h3>{templateName}</h3>
          <img src={preview} />
          <input
            type='checkbox'
            checked={selected}
            onChange={(e) => this.handleChange(e, templateName)}
            style={styles.checkbox} />
        </div>
      );
    });
  }

  handleChange (e, templateName) {
    const { dispatch, setTemplate } = this.props;
    dispatch(setTemplate(e, templateName));
  }

  // handleSubmit (e) {
  //   const { dispatch, setTemplate } = this.props;
  //   const { selectedTempate } = this.state;

  //   dispatch(setTemplate(e, selectedTempate));
  // }
}

SinglePagesList.propTypes = {
  singlePages: PropTypes.array,
  dispatch: PropTypes.func,
  setTemplate: PropTypes.func
};

const styles = {
  checkbox: {
    display: 'block'
  }
};
