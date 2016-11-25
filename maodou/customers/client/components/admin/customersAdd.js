import React from 'react';
import Loading from 'client/components/common/loading';

export default class CustomersAdd extends React.Component {
  render() {
    const { data, status } = this.props.customers;
    return (
      <div className="row">
        <div className="col-sm-12">
          <h1>新增客户</h1>
          {status !== 'ready' ? <Loading />:
          <form onSubmit={(c) => this.props.dispatch(this.props.addCustomer(c))}>

            <div className="form-group">
              <label>项目编号</label>
              <input className="form-control" type="number" defaultValue={data.length+1} name="index" />
            </div>
            <div className="form-group">
              <label>项目名称</label>
              <input className="form-control" type="text" placeholder="title" name="title" />
            </div>
            <div className="form-group">
              <label>客户级别：
                <select className='checkbox-inline' name="category">
                  <option value="A类，产品直接客户">A类，产品直接客户</option>
                  <option value="B类，产品相关的定制项目客户">B类，产品相关的定制项目客户</option>
                  <option value="C类，产品无关的定制项目客户">C类，产品无关的定制项目客户</option>
                </select>
              </label>
            </div>
            <div className="form-group">
              <label>客户联系人</label>
              <input className="form-control" type="test" placeholder="customerName" name="customerName" />
            </div>
            <div className="form-group">
              <label>跟单负责人</label>
              <input className="form-control" type="text" placeholder="salesName" name="salesName" />
            </div>
            <div className="form-group">
              <label>项目描述</label>
              <textarea className="form-control" type="text" rows="5" placeholder="description" name="desc" />
            </div>
            <div className="form-group">
              <label>当前状态：
                <select className='checkbox-inline' defaultValue="已经建立联系，正在讨论项目需求" name="schedule">
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
              <input className="checkbox-inline" type="number" placeholder="number" name="money" />元
              </label>
            </div>
            <button className="btn btn-default" type="submit">提交</button>
          </form>
          }
        </div>
      </div>
    );
  }
}
