import React from 'react';
import Posts from '../../../maodou/posts/client/containers/posts';

export default (props) => (
  <div className="container">
    {/* props.display ? <Posts /> : renderMaodou() */}
    <Posts />
  </div>
);

const renderMaodou = () => {
  return (
    <div className='container panel panel-success' style={styles.intro}>
      <div className='panel-heading'>
        <h4>毛豆网简介</h4>
      </div>
      <div className='panel-body'>
        <p>毛豆网成立于2014年6月，是一支源自清华的技术创业团队，我们是由一批热爱开源技术，心有教育情怀的年轻人组成，渴望用技术帮助他人，改变世界。</p>
        <p>毛豆网是国内第一家专注于服务内容创业的云平台，为内容创业者提供建站和运维的一站式服务，帮助他们降低技术门槛和运营成本，从而高效地生产优质内容。</p>
        <p>毛豆网目前在北京清华和美国硅谷设有研发中心，核心成员出自清华、人大、浙大等国内一流高校。2016年6月毛豆网获清华x-lab创业DNA基金天使投资。</p>
        <a href='https://maodou.io/' className='btn btn-primary'>去关注</a>
      </div>
    </div>
  );
};

const styles = {
  avatar: {
    height: '40px',
    width: '40px',
    borderRadius: '50%'
  },
  intro: {
    color: '#000',
    marginTop: '20px',
    fontSize: '16px',
    padding: '6px'
  }
};
