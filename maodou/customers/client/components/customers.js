import React from 'react';
import {Link} from 'react-router';
import moment from 'moment';

export default (props) => {
  const T = props.context.T;
  return (
    <div className="row" style={styles.root}>
      <div className="col-md-12">
        <h1>客户列表 (总计 {props.customers.data.length}个)</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>编号</th>
              <th>客户类别</th>
              <th>客户</th>
              <th>项目</th>
              <th>当前状态</th>
              <th>跟单人</th>
              <th>最近更新</th>
            </tr>
          </thead>
          <tbody>
          {
            props.customers.status === 'ready' ?
              props.customers.data.length > 0 ?
                listCustomers(props.customers.data) :
                (
                  <tr>
                    <td>抱歉，目前还没有客户!</td>
                  </tr>
                ) :
                (
                  <tr>
                    <td>Loading...</td>
                  </tr>
                )
          }
          </tbody>
        </table>

      </div>
    </div>
  )
}

const listCustomers = (customers) => {
      return (
        customers.map((customer, index) => {
          return (
            <tr key={index}>
              <td>{customer.index}</td>
              <td>{customer.category}</td>
              <td>{customer.customerName}</td>
              <td><Link to={`/customer/${customer._id}`}>{customer.title}</Link></td>
              <td>{customer.schedule}</td>
              <td>{customer.salesName}</td>
              <td>{showTimeAgo(customer.updatedAt||customer.createdAt)}</td>
            </tr>
          )
        })
      )
    }


const showTimeAgo = function(date) {
  return !date ? "" : moment(date).fromNow();
}

const styles = {
  root: {
    marginTop: '60px',
    marginLeft: '35px',
    marginRight: '35px'
  }
}
