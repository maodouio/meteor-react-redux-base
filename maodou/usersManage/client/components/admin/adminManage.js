import React,{ Component } from 'react';
import Loading from 'client/components/common/loading';

export default class CustomersList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderUsers(users) {
    return (
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>序号</th>
              <th>用户名</th>
              <th>手机号</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) =>
              Roles.userIsInRole(user._id, ['admin']) && ( !Roles.userIsInRole(user._id, ['owner']) ) ?
              <tr key={user._id}>
                <td>{index+1}</td>
                <td>{user.username}</td>
                <td>{user.profile.phoneNumber || '无'}</td>
                <td><button className="btn btn-xs btn-danger"  onClick={(e) => this.props.dispatch(this.props.permissionDown(e, user._id, 'admin'))}>撤除管理员</button></td>
              </tr> : <tr key={index}></tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }

  userIsAdmin (users){
    var xx = false;
    users.map( function (user){
      if (Roles.userIsInRole(user._id, ['admin']) && ( !Roles.userIsInRole(user._id, ['owner']) ))
       {xx = true;}
    });
    return xx;
  }


  Up (e, addRoles, upTo, users) {
    const username = document.getElementById(upTo).value;
    this.props.dispatch(this.props.permissionUp(username, addRoles))
  }

  render() {
    const { data, status } = this.props.users;
    return(
      <div className="admin-package-wrapper row">
        <div className="col-sm-12" style={{marginTop: '20px'}}>
          <h2 style={{display: 'inline'}}>管理员列表</h2>
          <div style={{marginLeft : '100px', display: 'inline'}} >用户名：
          <input id='upToAdmin'  type="string" style={{marginRight: '10px'}} placeholder="User Name" name="username" />
          <button className="btn btn-default" onClick={(e) => this.Up(e, 'admin', 'upToAdmin', data)}>纳为管理员</button>
          </div>
          {
            status === 'ready' ?
              this.userIsAdmin(data) ?
                this.renderUsers(data)
                : <div>抱歉，目前您还没有分配管理员！</div>
              : <Loading />
          }
        </div>
      </div>
    );
  }
}
