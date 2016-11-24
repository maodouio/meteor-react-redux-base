import React from 'react';

export default class CustomerEdit extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { unit: '$' };
    // this.changeUnit = this.changeUnit.bind(this);
  }
  debugger
  render() {
    const { dispatch, updateCustomer, customer } = this.props;
    return(
      <div className="row">
        <div className="col-sm-12">
          <h1>更新客户进展</h1>
          <form onSubmit={(c) => this.props.dispatch(this.props.editCustomer(c, customer._id))}>
            <div className="form-group">
              <label>项目编号</label>
              <input className="form-control" type="number" defaultValue={this.props.customer.index} name="index" />
            </div>
            <div className="form-group">
              <label>项目名称</label>
              <input className="form-control" type="text" defaultValue={this.props.customer.title} name="title" />
            </div>
            <div className="form-group">
              <label>客户级别：
              <select className='checkbox-inline' defaultValue={this.props.customer.category} name="category">
                <option value="A类，产品直接客户">A类，产品直接客户</option>
                <option value="B类，产品相关的定制项目客户">B类，产品相关的定制项目客户</option>
                <option value="C类，产品无关的定制项目客户">C类，产品无关的定制项目客户</option>
              </select>
              </label>
            </div>
            <div className="form-group">
              <label>客户联系人</label>
              <input className="form-control" type="test" defaultValue={this.props.customer.customerName} name="customerName" />
            </div>
            <div className="form-group">
              <label>跟单负责人</label>
              <input className="form-control" type="text" defaultValue={this.props.customer.salesName} name="salesName" />
            </div>
            <div className="form-group">
              <label>项目描述</label>
              <textarea className="form-control" type="text" rows="5" defaultValue={this.props.customer.desc} name="desc" />
            </div>
            <div className="form-group">
              <label>当前状态：
              <select className='checkbox-inline' defaultValue={this.props.customer.schedule} name="schedule">
                <option value="已经建立联系，正在讨论项目需求">已经建立联系，正在讨论项目需求</option>
                <option value="已经明确需求，正在讨论原型设计">已经明确需求，正在讨论原型设计</option>
                <option value="已经完成原型，正在讨论报价方案">已经完成原型，正在讨论报价方案</option>
                <option value="已经确定报价，正在讨论合同细节">已经确定报价，正在讨论合同细节</option>
                <option value="已经签署合同，正在等待项目首款">已经签署合同，正在等待项目首款</option>
                <option value="已经收到首款，正在开发">已经收到首款，正在开发</option>
                <option value="已经完成开发，正在测试">已经完成开发，正在测试</option>
                <option value="已经完成测试，正在部署上线">已经完成测试，正在部署上线</option>
                <option value="已经完成上线，正在等待项目尾款">已经完成上线，正在等待项目尾款</option>
                <option value="已经收到尾款，项目圆满结束">已经收到尾款，项目圆满结束</option>
              </select>
              </label>
            </div>
            <div className="form-group">
              <label>签单金额：
              <input className="checkbox-inline" type="number" defaultValue={this.props.customer.money} name="money" />元
              </label>
            </div>
            <button className="btn btn-default" type="submit">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

// changeCategory(){
//   if (this.state.category === true) {
//     this.setState({ unit:true });
//   } else {
//     this.setState({ unit:false });
//   }
// }
