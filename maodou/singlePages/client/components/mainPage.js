import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import Loading from 'client/components/common/loading';
import {Link} from 'react-router';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { singlePage } = this.props;
    const { templateName,logoImgUrl, logoName, headTitle, sections } = singlePage.data;

    if (singlePage.status === 'pending') {
      return <Loading />;
    }

    return (
      <div>
        <Helmet title={headTitle} />
        {<nav className="navbar navbar-default navbar-fixed-top topnav" role="navigation">
                  <div className="container-fluid">
                    <div className="navbar-header">
                      <button type="button" data-target="#main-navbar" data-toggle="collapse" className="navbar-toggle collapsed">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                      <div className='logodiv'><img className='logoimg' src={logoImgUrl} /></div>
                      <a className="navbar-brand" href="/" style={{marginLeft: '50px'}}>{logoName}</a>
                    </div>
                    <div className="collapse navbar-collapse" id="main-navbar" style={{float: 'right'}}>
                      <ul className="nav navbar-nav">
                        { sections.map((section) => this.renderHeader(section)) }
                      </ul>

                      {this.props.isAdmin ?
                        <ul className="nav navbar-nav navbar-right">
                          <li><Link to="/admin">管理员后台</Link></li>
                        </ul>
                         : <span />
                       }
                       {this.props.loggedIn ? renderUser(this.props.nickname) : renderLogin() }

                    </div>
                  </div>
                </nav>}
        <div id={templateName}>
          {
            sections.length > 0 ?
            sections.map((section, index) => this.renderContent(section, index)) :
            <h3>No content...</h3>
          }
        </div>
      </div>
    );
  }


  renderHeader(section) {
    if (section.display) {
      if (section.name === 'footer') {
        return '';
      }
      return (
        <li key={section.name}><a href={`#${section.anchorName}`} style={styles.link}>{section.name}</a></li>
      );
    }
  }

  renderContent(section, index) {
    if (section.display) {
      return (
        <div id={section.anchorName} key={index}>
          <div dangerouslySetInnerHTML={{ __html: section.content }}>
          </div>
        </div>
      );
    }
  }
}

MainPage.propTypes = {
  singlePage: PropTypes.object
};

const styles = {
  section: {
    padding: '50px',
  },
  name: {
    textAlign: 'center',
  },
  link: {
    // fontSize: '20px',
    textTransform: 'capitalize'
  }
};
const renderUser = (nickname) => {
  return (
    <ul className="nav navbar-nav navbar-right">
      <li><Link>欢迎，{nickname}</Link></li>
      <li><Link to="/" onClick={(e) => Meteor.logout()}>退出</Link></li>
    </ul>
  );
};

const renderLogin = () => (
  <ul className="nav navbar-nav navbar-right">
    <li><Link to="/login">登录</Link></li>
    <li><Link to="/register">注册</Link></li>
  </ul>
);
