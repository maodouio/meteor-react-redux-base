import React, { Component, PropTypes } from 'react';


export default class News extends React.Component{
  constructor(props){
    super(props);
  }

  render (){
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-sm-12 col-xs-12'>

          </div>
          <div className='col-md-3 col-sm-6 col-xs-6' style={{marginTop: '30px'}}>
            <img className='pic2' width='100%' height='100%' src="/images/about2.jpg" alt="..." />
          </div>
          <div className='col-md-3 col-sm-6 col-xs-6' style={{marginTop: '30px'}}>
            <img className='pic2' width='100%' height='100%' src="/images/about2.jpg" alt="..." />
          </div>
        </div>
      </div>
    )
  }
}
