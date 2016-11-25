import React, { Component, PropTypes } from 'react';

import Section from '../../../../containers/admin/singlePagesConf/config/section';
import Content from '../../../../containers/admin/singlePagesConf/config/content';
import Iframe from './iframe';


export default class Config extends Component {
  render () {
    const { selectedSection } = this.props;

    return (
      <div>
        <div className="col-sm-12 col-md-4">
          <Section />
        </div>
        { selectedSection ?  <Content /> : <Iframe />}
      </div>
    );
  }
}

Config.propTypes = {
  selectedSection: PropTypes.string
};
