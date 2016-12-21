import React, { Component, PropTypes } from 'react';
import Loading from 'client/components/common/loading';
import moment from 'moment';
import Helmet from 'react-helmet';

export default class ApplyingMemberManage extends Component {
  constructor(props) {
    super(props);
  }

  renderUsers(users) {
    return (
      <div className="table-responsive">
        <Helmet title='待批准会员列表' />
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
                <td>
                  <button className="btn btn-xs btn-success"  onClick={(e) => this.props.dispatch(this.props.agreeMember(e, user._id))}>批准</button>
                  <button className="btn btn-xs btn-danger"  onClick={(e) => this.props.dispatch(this.props.disagreeMember(e, user._id))}>拒绝</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    const { data, status } = this.props.users;
    return(
      <div>
        { status === 'ready' ? data.length > 0 ? this.renderUsers(data) : <div>暂时没有用户申请．</div> : <Loading /> }
      </div>
    );
  }
}

ApplyingMemberManage.propTypes = {
  dispatch: PropTypes.func,
  agreeMember: PropTypes.func,
  disagreeMember: PropTypes.func,
  users: PropTypes.object,
  status: PropTypes.string,
  data: PropTypes.array,
};
