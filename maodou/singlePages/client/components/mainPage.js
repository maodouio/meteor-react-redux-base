import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import Welcome from 'client/components/common/welcome';

// singlePage的缓动js和navbar样式js
// import navbar from 'maodou/singlePages/js/navbar';

import {Link} from 'react-router';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidUpdate () {
  //   // singlePage的缓动js和navbar样式js
  //   navbar();
  // }

  render () {
    const { singlePage } = this.props;
    const { templateName,logoImgUrl, logoName, headTitle, sections } = singlePage.data;

    if (singlePage.status === 'pending') {
      return <Welcome />;
    }

    return (
      <div>
        <Helmet title={headTitle} />
        {/*<nav className="navbar header navbar-fixed-top topnav" role="navigation" >
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
                      <ul className="nav navbar-nav nav_aPublic">
                        { sections.map((section) => this.renderHeader(section)) }
                      </ul>
                       {
                         this.props.loggedIn ?
                         <ul className="nav navbar-nav navbar-right">
                           <li><Link className = 'admin' to="/admin" style = {styles.in}><i className="fa fa-caret-right" aria-hidden="true"></i></Link></li>
                         </ul> : <span />
                       }
                    </div>
                  </div>
                </nav>*/}
        <div id={templateName}>
          {
            sections.length > 0 ?
            sections.map((section, index) => this.renderContent(section, index)) :
            <h3>No content...</h3>
          }
        </div>
        {this.props.loggedIn ?
        <Link to="/" style = {styles.out} onClick={(e) => Meteor.logout()}><i className="pe-7s-upload pe-rotate-90"></i></Link>
        :<span />}
      </div>
    );
  }


  renderHeader(section) {
    if (section.display) {
      if (section.name === 'BLANK') {
        return '';
      }
      if (section.index === 1 ){
        return (
          <li key={section.name}><a href={`#${section.anchorName}`} className="nav_in" style={styles.link}>{section.name}</a></li>
        );
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
  },
  in: {
    paddingLeft:'0',
    paddingRight:'10px'
  },
  out: {
    position: 'fixed',
    bottom: '0',
    right: '0'
  }
};
