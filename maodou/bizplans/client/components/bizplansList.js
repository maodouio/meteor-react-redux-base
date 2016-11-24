import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class BizplansList extends Component {
  render () {
    const { bizplans } = this.props

    return (
      <div className='container' style={styles.root}>
        <div style={styles.header}>
          <div style={{ flex: '1' }}></div>
          <div style={styles.headerH4}>
            <h4 className='glyphicon glyphicon-hand-down'>
              项目列表
            </h4>
          </div>
          <Link to='/bizplan/add' style={styles.linkAdd}>
            <i className='fa fa-plus fa-lg' aria-hidden='true'></i>
          </Link>
        </div>
        {this.renderBizplans(bizplans)}
      </div>
    )
  }

  renderBizplans (bizplans) {
    return bizplans.map(bizplan => (
      <div style={styles.bizplan} key={bizplan._id}>
        <Link to={`/bizplan/${bizplan._id}`} >
          <div style={styles.rootContainer}>
            <div style={styles.upper}>
              <h4 style={styles.h4}>{bizplan.name}</h4>
              <div style={styles.desc}>
                {bizplan.desc}
              </div>
            </div>
            <div style={styles.types}>
              {this.renderTypes(bizplan.types)}
            </div>
          </div>
        </Link>
      </div>
    ))
  }

  renderTypes (types) {
    return types.slice(0, 3).map((type, index) => {
      return <button
        style={styles.typeButton}
        key={index}
        type='button'
        className='btn btn-default btn-xs'>
        {type}
      </button>
    })
  }
}

BizplansList.propTypes = {
  bizplans: PropTypes.array
}

const styles = {
  root: {
    minHeight: '100vh',
    paddingBottom: '15px',
    marginTop: '65px'
  },
  bizplan: {
    paddingBottom: '15px',
    borderBottom: '1px solid #f0f0f0'
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '0px',
    marginBottom: '10px'
  },
  headerH4: {
    flex: '5',
    textAlign: 'center'
  },
  linkAdd: {
    flex: '1',
    alignSelf: 'center',
    textAlign: 'center'
  },
  h4: {
    paddingBottom: '0px',
    marginBottom: '0px',
    textAlign: 'center'
  },
  rootContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '10px'
  },
  upper: {
    display: 'flex'
  },
  desc: {
    marginTop: '10px',
    marginLeft: '10px'
  },
  types: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  typeButton: {
    marginTop: '7px',
    backgroundColor: '#F1F1F1'
  }
}
