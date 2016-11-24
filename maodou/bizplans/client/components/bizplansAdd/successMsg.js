import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class SuccessMsg extends Component {
  render () {
    return (
      <div id='successMsg' className='modal fade' role='dialog'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-body' style={styles.body}>
              <p style={{ color: 'black' }}>提交成功!</p>
              <p style={{ color: 'black' }}>感谢您的信任，我们会尽快与您联系</p>
            </div>
            <div className='modal-footer' style={styles.footer}>
              <Link href='/bizplans/list' className='btn btn-default'>Close</Link>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

const styles = {
  body: {
    paddingTop: '40px',
    textAlign: 'center',
    fontSize: '20px'
  },
  footer: {
    textAlign: 'center'
  }
}
