import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import moment from 'moment'

export default class BizplansList extends Component {
  render () {
    const { bizplans } = this.props

    return (
      <div>
        <h4 style={styles.h4}>
          <b className='glyphicon glyphicon-hand-down' style={styles.b}>
            项目列表
          </b>
        </h4>
        {this.renderBizplans(bizplans)}
      </div>
    )
  }

  renderBizplans (bizplans) {
    const { dispatch, removeBizplan } = this.props

    return bizplans.map(bizplan => (
      <div style={styles.rootContainer} key={bizplan._id}>
        <Link to={`/admin/bizplan/${bizplan._id}`} style={styles.link}>
          <div style={styles.left}>
            <div style={styles.name}>
              <h4>{bizplan.name}</h4>
            </div>
            <div style={styles.types}>
              {bizplan.types.join(' | ')}
            </div>
          </div>
          <div style={styles.right}>
            <div style={styles.createdAt}>
              {moment(bizplan.createdAt).format('YYYY-MM-DD')}
            </div>
          </div>
        </Link>
        <div style={styles.button}>
          <button className='btn btn-danger' onClick={() => dispatch(removeBizplan(bizplan._id))} >
            删除项目
          </button>
        </div>
      </div>
    ))
  }
}

BizplansList.propTypes = {
  bizplans: PropTypes.array,
  dispatch: PropTypes.func,
  removeBizplan: PropTypes.func
}

const styles = {
  h4: {
    paddingLeft: '12px',
    textAlign: 'center'
  },
  b: {
    margin: '10px 3px'
  },
  rootContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0px 20px'
  },
  link: {
    display: 'flex',
    justifyContent: 'space-between',
    flexGrow: 1
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  name: {
    color: '#000'
  },
  types: {
    color: '#7b7b7b',
    margin: '6px 0px'
  },
  right: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: '25px'
  },
  createdAt: {
    paddingTop: '25px'
  },
  descPic: {
    paddingTop: '8px',
    marginLeft: '20px'
  },
  button: {
    paddingTop: '15px'
  }
}
