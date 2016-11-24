import React, { Component } from 'react'

export default class UploadButton extends Component {
  render () {
    return (
      <a className='btn btn-info' style={styles.uploadButton} id='bizplanPDF' href='#'>点击上传</a>
    )
  }
}

const styles = {
  uploadButton: {
    width: '200px'
  }
}
