import React, { Component, PropTypes } from 'react';

export default class UserInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = this.getStyles();
    const { nickname, email, sex, city, job, hobby} = this.props;
    return(
      <div className='container' style={styles.wrapper}>
        <h3>个人资料</h3>
        <ul className="list-group">
          <li className="list-group-item"><p> <span style={styles.text}>用户名：</span><span style={styles.info}>{nickname}</span></p></li>
          <li className="list-group-item"><p> <span style={styles.text}>邮箱：</span><span style={styles.info}>{email}</span></p></li>
          <li className="list-group-item"><p> <span style={styles.text}>性别：</span><span style={styles.info}>{sex}</span></p></li>
          <li className="list-group-item"><p> <span style={styles.text}>所在城市：</span><span style={styles.info}>{city}</span></p></li>
          <li className="list-group-item"><p> <span style={styles.text}>职业：</span><span style={styles.info}>{job}</span></p></li>
          <li className="list-group-item"><p> <span style={styles.text}>爱好：</span><span style={styles.info}>{hobby}</span></p></li>
        </ul>
        <button className='btn btn-default'>完善资料</button>
      </div>
    );
  }

  getStyles() {
    return {
      wrapper: {
        paddingTop: '100px',
        fontSize: '20px',
        display: 'flex',
        flexFlow: 'column wrap',
        alignItems: 'center',
        margin: '10px',
      },
      text: {
        fontWeight: 'bold',
      },
      info: {
        float: 'right',
        marginRight: '20px',
      },
    };
  }
}
