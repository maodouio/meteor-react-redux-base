import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Loading from 'client/components/common/loading';
import moment from 'moment';
import Helmet from 'react-helmet';

export default class UsersList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { users, status, isOwner } = this.props;
    return(
      <div className="admin-package-wrapper row">
        <Helmet title='所有用户列表' />
        <div className="col-sm-12">
          <h1>管理用户
            { isOwner ? <Link to='/admin/users/admin' className='btn btn-success'>分配管理员</Link> : <span />}
          </h1>
          { status === 'ready' ?
            users.length > 0 ? this.renderUsers(users) : <div>抱歉，目前还没有用户！</div>
            : <Loading />
          }
        </div>
      </div>
    );
  }

  renderUsers(users) {
    return (
      <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr style={{fontSize: '16px'}}>
          <th>序号</th>
          <th>名称</th>
          <th>手机号</th>
          <th>注册日期</th>
          <th>角色</th>
          <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) =>
            <tr key={user._id} style={{fontSize: '16px'}}>
              <td style={{lineHeight: '50px'}}>{index+1}</td>
              <td style={{lineHeight: '50px'}}>{user.profile.nickname || '无'}</td>
              <td style={{lineHeight: '50px'}}>{user.profile.phoneNumber || '无'}</td>
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

  renderRole(user) {
    if (user.roles) {
      return user.roles[0];
    }
    return 'user';
  }
}

UsersList.propTypes = {
  users: PropTypes.array,
  status: PropTypes.string,
  isOwner: PropTypes.bool,
  dispatch: PropTypes.func,
  deleteUser: PropTypes.func,
};
