import React from 'react';
import Loading from 'client/components/common/loading';
import moment from 'moment';

export default (props)=>{
  return(
    <div className="container-full" style={{ paddingTop: '60px'}}>
      <div >
        <div className="col-lg-12">
          {
            props.customer ?
              <div className="hpanel blog-article-box">
                <div className="panel-footer" style={styles.mLR15}>
                  <h2 style={styles.mLR15}>{props.customer.index}-{props.customer.title}</h2>
                  <hr />
                  <p style={styles.mLR15}>当前状态：{props.customer.schedule}</p>
                  <p style={styles.mLR15}>跟单人：{props.customer.salesName}</p>
                  <p style={styles.mLR15}>更新于 {showTimeAgo(props.customer.updatedAt||props.customer.createdAt)}</p>
                  <hr />
                  <h3 style={styles.mLR15}>{props.customer.project}</h3>
                  <p style={styles.mLR15}>项目描述：<br/> <textarea className="form-control" rows="3">{props.customer.desc}</textarea> </p>
                  <p style={styles.mLR15}>客户类别：{props.customer.category}</p>
                  <p style={styles.mLR15}>客户联系人：{props.customer.customerName}</p>
                  <hr />
                  <p style={styles.mLR15}>创建者：{props.customer.author}</p>
                  <p style={styles.mLR15}>创建于 {showPrettyTimestamp(props.customer.createdAt)}</p>
                  <p style={styles.mLR15}>签单金额：{props.customer.money}元</p>
                  <br /><br />
                </div>
              </div> :
              <Loading />
          }
        </div>
      </div>
    </div>
  )
}
const styles = {
  mLR15: {
    marginLeft: '15px',
    marginRight: '15px',
    color: '#333333'
  }
}
const showTimeAgo = function(date) {
  return !date ? "" : moment(date).fromNow();
}

const showPrettyTimestamp = function(date) {
  return !date ? "" : moment(date).format("MMMM Do YYYY, h:mm:ss a")
}
