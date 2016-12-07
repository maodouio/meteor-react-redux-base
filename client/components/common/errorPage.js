import React from 'react';
import {Link} from 'react-router';
import Helmet from 'react-helmet';

export default ({ code, info, description }) => (
  <div className="error-container text-center">
    <Helmet title='404页面未找到' />
    <i className="pe-7s-way text-success big-icon" />
    <h1><strong>{code}</strong></h1>
    <h2>{info}</h2>
    <p>{description}</p>
    <Link style={{ marginTop: '15px' }} to="/" className="btn btn-lg btn-success">
      回到首页
    </Link>
  </div>
);
