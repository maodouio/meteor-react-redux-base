import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
// import moment from 'moment'

export default class SingleBizplan extends Component {
  render () {
    const { bizplan } = this.props

    return (
      <div className='container' style={styles.root}>
        <div className='noticemain'>
          项目详情
        </div>
        <div className='notice notice-sm'>
          <strong>PDF: </strong>
          <br/>
          <a href={bizplan.PDFUrl} style={{ marginRight: '20px' }} target='_blank'>{bizplan.PDFName}</a>
          <a href={`${bizplan.PDFUrl}?download/${bizplan.PDFName}`}><i className='fa fa-download' aria-hidden='true'></i></a>
        </div>
        <div className='notice notice-success'>
          <strong>名称: </strong>
          <br/>
          {bizplan.name}
        </div>
        <div className='notice notice-info'>
          <strong>联系方式: </strong>
          <br/>
          {bizplan.contact}
        </div>
        <div className='notice notice-danger'>
          <strong>项目类型: </strong>
          <br/>
          {bizplan.types.join(' | ')}
        </div>
        <div className='notice notice-warning'>
          <strong>一句话概括项目内容: </strong>
          <br/>
          {bizplan.desc}
        </div>
        <div className='notice notice-button'>
          <Link to='/bizplans/list' className='btn btn-sm btn-default' >返回</Link>
        </div>
      </div>
    )
  }

  renderPic (pic) {
    const url = this.props.bizplan[pic]
    if (url) {
      return <img src={url} style={styles[pic]} />
    }
  }
}

SingleBizplan.propTypes = {
  bizplan: PropTypes.object
}

const styles = {
  root: {
    minHeight: '100vh',
    marginTop: '60px',
    fontSize: '15px'
  },
  competencyPic: {
    width: '500px',
    height: '400px'
  },
  teamPic: {
    width: '500px',
    height: '400px'
  }
}
