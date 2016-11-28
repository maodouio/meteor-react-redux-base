import React from 'react';
import {Link} from 'react-router';
import moment from 'moment';

export default class Customers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Ccategory: '客户类别',
    };
  };

  customersSum = (customers) => {
    let sum = 0;
    customers.map((customer) => {
      (this.state.Ccategory===customer.category)?
        (customer.amount >= 0) ?
      sum = sum + customer.amount : '' : ''
    })
    return (
      <h3>{this.state.Ccategory} 签单总金额：{sum} 元</h3>
    )
  }

  listCustomers = (customers) => {
    return (
      customers.map((customer, index) => {
        const cItem = ((this.state.Ccategory==="客户类别")||(this.state.Ccategory===customer.category))?
        <tr key={index}>
          <td>{customer.index}</td>
          <td>{customer.category}</td>
          <td>{customer.customerName}</td>
          <td><Link to={`/customers/${customer._id}`} style={{color:"#337ab7"}}>{customer.title}</Link></td>
          <td>{customer.schedule}</td>
          <td>{customer.salesName}</td>
          <td>{customer.amount}</td>
          <td>{showTimeAgo(customer.updatedAt||customer.createdAt)}</td>
          <td>{customer.author}</td>
        </tr>
      :<tr></tr>
        return cItem
      })
    )
  };
  changeCategory = () => {
    const Ccategory = document.getElementById('Icategory').value;
    this.setState({ Ccategory: Ccategory });
  };

  render() {
  return (
    <div className="row" style={styles.root}>
      <div className="col-md-12">
        <h1>客户列表 (总计 {this.props.customers.data.length}个)</h1>
        <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>编号</th>
              <th>
                <select id='Icategory' className='checkbox-inline' defaultValue='客户类别' onChange={this.changeCategory} name="category">
                  <option value="客户类别">客户类别</option>
                  <option value="A类,产品直接客户">A类,产品直接客户</option>
                  <option value="B类,产品相关定制项目客户">B类,产品相关定制项目客户</option>
                  <option value="C类,产品无关定制项目客户">C类,产品无关定制项目客户</option>
                </select>
              </th>
              <th>客户</th>
              <th>项目</th>
              <th>当前状态</th>
              <th>跟单人</th>
              <th>签单金额</th>
              <th>最近更新</th>
              <th>创建者</th>
            </tr>
          </thead>
          <tbody>
          {
            this.props.customers.status === 'ready' ?
              this.props.customers.data.length > 0 ?
                this.listCustomers(this.props.customers.data) :
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
        {
          this.props.customers.status === 'ready' ?
            this.props.customers.data.length > 0 ?
              (this.state.Ccategory !== "客户类别")?
                this.customersSum(this.props.customers.data)
              :''
            :''
          :''
        }
        </div>
      </div>
    </div>
  )
}
}

const showTimeAgo = function(date) {
  return !date ? "" : moment(date).fromNow();
}

const styles = {
  root: {
    marginTop: '60px',
    marginLeft: '35px',
    marginRight: '35px',
    fontSize: '14px'
  }
}
