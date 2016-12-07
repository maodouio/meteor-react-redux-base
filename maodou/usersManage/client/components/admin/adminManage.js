import React,{ Component, PropTypes } from 'react';
import Loading from 'client/components/common/loading';
import moment from 'moment';
import Helmet from 'react-helmet';

export default class AdminManage extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  renderUsers(users) {
    return (
      <div className="table-responsive">
        <Helmet title='管理员列表' />
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>序号</th>
              <th>用户名</th>
              <th>手机号</th>
              <th>注册日期</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) =>
              <tr key={user._id}>
                <td>{index+1}</td>
                <td>{user.profile.nickname || '无'}</td>
                <td>{user.profile.phoneNumber || '无'}</td>
                <td>{moment(user.createdAt).format('YYYY-MM-DD')}</td>
                <td><button className="btn btn-xs btn-danger"  onClick={(e) => this.props.dispatch(this.props.permissionDown(e, user._id))}>撤除管理员</button></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }

  handleClick(e) {
    e.preventDefault();
    const { dispatch, permissionUp } = this.props;
    const username = this.refs.username.value;
    dispatch(permissionUp(username, 'admin'));
  }

  render() {
    const { data, status } = this.props.users;
    return(
      <div className="admin-package-wrapper row">
        <div className="col-sm-12" style={{marginTop: '20px'}}>
          <h2 style={{display: 'inline'}}>管理员列表</h2>
          <div style={{marginLeft : '100px', display: 'inline'}} >用户名：
          <input type="text" style={{marginRight: '10px'}} placeholder="User Name" ref="username" />
          <button className="btn btn-default" onClick={this.handleClick}>纳为管理员</button>
          </div>
          {
            status === 'ready' ? this.renderUsers(data) : <Loading />
          }
        </div>
      </div>
    );
  }
}

AdminManage.propTypes = {
  dispatch: PropTypes.func,
  permissionUp: PropTypes.func,
  permissionDown: PropTypes.func,
  users: PropTypes.object,
  data: PropTypes.array,
  status: PropTypes.string,
};
