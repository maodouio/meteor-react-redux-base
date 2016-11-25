import React, { Component } from 'react';
import {Link} from 'react-router';
import Loading from 'client/components/common/loading';
import moment from 'moment';

export default class CustomersList extends Component {
  render() {
    const { data, status } = this.props.customers;
    return(
      <div className="admin-package-wrapper row">
        <div className="col-sm-12">
          <h1>客户管理 (总计 {data.length}个)</h1>
          { status === 'ready' ?
            data.length > 0 ? this.renderEvents(data) : <div>抱歉，目前还没有活动！</div>
            : <Loading />
          }
        </div>
      </div>
    );
  }

  renderEvents(customers) {
    return (
      <div className="table-responsive">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th><a>编号</a></th>
            <th>客户类别</th>
            <th>客户</th>
            <th>项目</th>
            <th>当前状态</th>
            <th>跟单人</th>
            <th>签单金额</th>
            <th>最近更新</th>
            <th>创建者</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) =>
            <tr key={index}>
              <td>{customer.index}</td>
              <td>{customer.category}</td>
              <td>{customer.customerName}</td>
              <td><Link to={`/customers/${customer._id}`}>{customer.title}</Link></td>
              <td>{customer.schedule}</td>
              <td>{customer.salesName}</td>
              <td>{customer.money}</td>
              <td>{showTimeAgo(customer.updatedAt||customer.createdAt)}</td>
              <td>{customer.author}</td>
              <td>{this.renderOperate(customer)}</td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
    );
  }

  renderOperate(customer) {
    // if(( Meteor.user().profile.nickname === "Admin" ) || (Meteor.user().profile.nickname === customer.author))
    //   {
        return (
          <div>
          <Link to={`/admin/customers/edit/${customer._id}`} className="btn btn-xs btn-default" role="button">更新</Link>
          <button className="btn btn-xs btn-danger"  onClick={(c) => this.props.dispatch(this.props.deleteCustomer(c, customer._id))}>删除</button>
          </div>
        )
      // }
      // else {
      //   return
      // }
  }
}

const showTimeAgo = function(date) {
  return !date ? "" : moment(date).fromNow();
}
