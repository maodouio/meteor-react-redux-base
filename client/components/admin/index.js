import React from 'react';

export default (props) => (
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <h4>核心配置</h4>
        <form onSubmit={props.saveCoreConfigs}>
          <div className="form-group">
            <label>网站名称</label>
            <input type="text" name="appName" className="form-control" defaultValue={props.appName} />
          </div>
          <button className="btn btn-success">提交</button>
        </form>
      </div>
    </div>
  </div>
);
