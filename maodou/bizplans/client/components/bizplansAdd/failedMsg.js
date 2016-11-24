import React, { Component, PropTypes } from 'react'

export default class FailedMsg extends Component {
  render () {
    return (
      <div id='failedMsg' className='modal fade' role='dialog'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-body' style={styles.body}>
              <p style={{ color: 'black' }}>提交失败!</p>
              <p style={{ color: 'black' }}>请确认资料输入是否正确</p>
            </div>
            <div className='modal-footer' style={styles.footer}>
              <button type='button' className='btn btn-default' data-dismiss='modal'>Close</button>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

const styles = {
  body: {
    textAlign: 'center',
    fontSize: '20px',
    color: 'black'
  },
  footer: {
    textAlign: 'center'
  }
}
