import React from 'react';

export default (props) => (
  <div>
    <a href="/admin">Admin</a> |
    {
      _.values(props.context.configs).map((config, index) => (
        <span key={index}><a href={config.adminUrl}>{config.displayName}</a> | </span>
      ))
    }
    <a href="/">Main Site</a> |
  </div>
);
