import React, { Component } from 'react';
import {Link} from 'react-router';
import Loading from 'client/components/common/loading';
import moment from 'moment';

export default class CustomersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  renderUsers(users, roles) {
    return (
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>用户名</th>
              <th>用户邮箱</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) =>
              Roles.userIsInRole(user, ['admin']) ?
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.emails[0].address}</td>
                <td><button className="btn btn-xs btn-danger"  onClick={(e) => this.props.dispatch(this.props.permissionDown(e, user._id, 'admin'))}>撤销</button></td>
              </tr> : <tr></tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }

  Up (e, addRoles, upTo) {
    const username = document.getElementById(upTo).value;
    // const user = Collections.Users.find ( {username: username} ).fetch();
    this.props.dispatch(this.props.permissionUp(username, addRoles))
  }
  
  render() {
    const { data, status } = this.props.users;
    return(
      <div className="admin-package-wrapper row">
        <div className="col-sm-12">
          <h2>管理员列表</h2>
          { status === 'ready' ?
            data.length > 0 ? this.renderUsers(data, 'admin') : <div>抱歉，目前您还没有分配管理员！</div>
            : <Loading />
          }
          <div>用户名：
          <input id='upToAdmin' className="checkbox-inline" type="string" placeholder="User Name" name="username" />
          <button className="btn btn-default" onClick={(e) => this.Up(e, 'admin', 'upToAdmin')}>纳为管理员</button>
          </div>
        </div>
      </div>
    );
  }
}
