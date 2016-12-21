import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Loading from 'client/components/common/loading';
import moment from 'moment';
import Helmet from 'react-helmet';
import { Table, Button, Popconfirm } from 'antd';

export default class UsersList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { users, status, isOwner } = this.props;
    return(
      <div>
        <Helmet title='所有用户列表' />
          <div style={{textAlign: 'center', fontSize: '22px', margin: '20px'}}>
            <span>管理用户</span><span style={{marginLeft: '20px'}}>{ isOwner ? <Link to='/admin/users/admin'><Button type='primary'>分配管理员</Button></Link> : <span />}</span>
          </div>
          { status === 'ready' ?
            users.length > 0 ? this.renderUsers(users) : <div>抱歉，目前还没有用户！</div>
            : <Loading />
          }
      </div>
    );
  }

  handleConfirm(id) {
    const { dispatch, deleteUser } = this.props;
    dispatch(deleteUser(id));
  }

  renderUsers(users) {
    const columns = [
      { title: '序号', dataIndex: 'index'},
      { title: '名称', dataIndex: 'name'},
      { title: '手机号', dataIndex: 'phone'},
      { title: '注册日期', dataIndex: 'date'},
      { title: '角色', dataIndex: 'role'},
      {
        title: '操作',
        dataIndex: 'action',
        render: (text, record) =>
          <Popconfirm title="确定要删除吗？" onConfirm={() => this.handleConfirm(record.key)} >
            <a href='#'>删除</a>
          </Popconfirm>}
    ];

    const dataSource = users.map(( user, index) => ({
      key: user._id,
      index: index+1,
      name: user.profile.nickname || '无',
      phone: user.profile.phoneNumber || '无',
      date: moment(user.createdAt).format('YYYY-MM-DD'),
      role: this.renderRole(user),
    }));
    return (
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={{ pageSize: 30 }}
        bordered
      />
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
