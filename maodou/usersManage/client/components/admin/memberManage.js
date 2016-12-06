import React, { Component } from 'react';
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
              <th>用户名</th>
              <th>用户邮箱</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) =>
              Roles.userIsInRole(user._id, ['member']) && ( !Roles.userIsInRole(user._id, ['owner']) ) ?
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.emails[0].address}</td>
                <td><button className="btn btn-xs btn-danger"  onClick={(e) => this.props.dispatch(this.props.permissionDown(e, user._id, 'member'))}>撤除会员</button></td>
              </tr> : <tr key={index}></tr>
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
// && ( !Roles.userIsInRole(user._id, ['owner']) )
  userIsMember (users){
    var xx = false;
    users.map( function (user){
      if (Roles.userIsInRole(user._id, ['member']) && ( !Roles.userIsInRole(user._id, ['owner']) ))
       {xx = true;}
    });
    return xx;
  }

  render() {
    const { data, status } = this.props.users;
    return(
      <div className="admin-package-wrapper row">
        <div className="col-sm-12" style={{marginTop: '20px'}}>
          <h2 style={{display: 'inline'}}>会员列表</h2>
          <div style={{marginLeft : '100px', display: 'inline'}} >用户名：
          <input id='upToMember' style={{marginRight: '10px'}} type="string" placeholder="User Name" name="username" />
          <button className="btn btn-default" onClick={(e) => this.Up(e, 'member', 'upToMember')}>纳为会员</button>
          </div>
          { status === 'ready' ?
              this.userIsMember(data)?
                this.renderUsers(data) :
                <div>抱歉，目前您还没有纳入会员！</div>
            : <Loading />
          }
        </div>
      </div>
    );
  }
}
