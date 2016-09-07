import React from 'react';
import {Link} from 'react-router';

export default ({ code, info, description }) => (
  <div className="error-container text-center">
    <i className="pe-7s-way text-success big-icon" />
    <h1><strong>{code}</strong></h1>
    <h2>{info}</h2>
    <p>{description}</p>
    <Link style={{ marginTop: '15px' }} to="/" className="btn btn-lg btn-success">
      Go back to home
    </Link>
  </div>
);
