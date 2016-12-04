import React, { Component, PropTypes } from 'react';
import Loading from 'client/components/common/loading';
import moment from 'moment';

export default class UsersList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { users, status } = this.props;
    return(
      <div className="admin-package-wrapper row">
        <div className="col-sm-12">
          <h1>管理用户</h1>
          { status === 'ready' ?
            users.length > 0 ? this.renderUsers(users) : <div>抱歉，目前还没有用户！</div>
            : <Loading />
          }
        </div>
      </div>
    );
  }

  renderUsers(users) {
    console.log(users);
    return (
      <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr style={{fontSize: '16px'}}>
          <th>序号</th>
          <th>名称</th>
          <th>邮箱</th>
          <th>注册日期</th>
          <th>角色</th>
          <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) =>
            <tr key={user._id} style={{fontSize: '16px'}}>
              <td style={{lineHeight: '50px'}}>{index+1}</td>
              <td style={{lineHeight: '50px'}}>{user.profile.nickname}</td>
              <td style={{lineHeight: '50px'}}>{this.renderEmail(user)}</td>
              <td style={{lineHeight: '50px'}}>{moment(user.createdAt).format('YYYY-MM-DD')}</td>
              <td style={{lineHeight: '50px'}}>{this.renderRole(user)}</td>
              <td style={{lineHeight: '50px'}}>
                <button className="btn btn-danger" onClick={(e) => this.props.dispatch((this.props.deleteUser(e, user._id)))}>删除</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
    );
  }

  renderEmail(user) {
    if (user.profile.headimgurl) {
      return '未知';
    }
    return user.emails[0].address;
  }
  renderRole(user) {
    if (user.roles) {
      return user.roles[0];
    }
    return 'user';
  }
}