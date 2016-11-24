import React, { Component, PropTypes } from 'react'
import UploadButton from '../../containers/bizplansAdd/uploadButton'
import SuccessMsg from './successMsg'
import FailedMsg from './failedMsg'

export default class BizplansAdd extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { dispatch, selectType, selectedTypes } = this.props

    return (
      <div className='container' style={styles.root}>

        <div style={styles.headTitle}>
          <div>
            <img
              src='https://oh2ll863y.qnssl.com/logo5.png'
              className='img-responsive'
              />
          </div>
        </div>

        <hr style={styles.horizontalLine} />

        <div style={styles.headSubTitle}>
          <div>上传商业计划书, 让伟大的想法找到认同者</div>
        </div>

        <br/>

        <div className='form-group'>
          <div id='upload-container' style={{ paddingLeft: '20px' }}>
            {this.renderUploadButton()}
          </div>
          <div>
            {this.renderPDF()}
          </div>
        </div>

        <br/>

        <div className='container'>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <fieldset>
              <div className='form-group'>
                <label>名称</label>
                <input type='text' name='name' className='form-control' />
              </div>
              <div className='form-group'>
                <label>联系方式</label>
                <input type='text' name='contact' className='form-control' />
              </div>

              <hr/>

              <div className='form-group'>
                <label>请选择项目类型</label>
                <br/>
                {this.renderTypes(selectedTypes)}
                <div style={{ marginTop: '10px' }}>
                  <label className='checkbox-inline'>
                    <input type='checkbox' value='互联网与信息技术' name='types' onClick={() => dispatch(selectType('互联网与信息技术'))} />
                    互联网与信息技术
                  </label>
                  <label className='checkbox-inline'>
                    <input type='checkbox' value='科技产品' name='types' onClick={() => dispatch(selectType('科技产品'))} />
                    科技产品
                  </label>
                  <label className='checkbox-inline'>
                    <input type='checkbox' value='智能硬件' name='types' onClick={() => dispatch(selectType('智能硬件'))}/>
                    智能硬件
                  </label>
                  <label className='checkbox-inline'>
                    <input type='checkbox' value='穿戴设备' name='types' onClick={() => dispatch(selectType('穿戴设备'))}/>
                    穿戴设备
                  </label>
                  <label className='checkbox-inline'>
                    <input type='checkbox' value='快速消费' name='types' onClick={() => dispatch(selectType('快速消费'))}/>
                    快速消费
                  </label>
                  <label className='checkbox-inline'>
                    <input type='checkbox' value='SaaS/PaaS工具' name='types' onClick={() => dispatch(selectType('SaaS/PaaS工具'))}/>
                    SaaS/PaaS工具
                  </label>
                  <label className='checkbox-inline'>
                    <input type='checkbox' value='医疗健康' name='types' onClick={() => dispatch(selectType('医疗健康'))}/>
                    医疗健康
                  </label>
                  <label className='checkbox-inline'>
                    <input type='checkbox' value='人工智能（机器人、无人机）' name='types' onClick={() => dispatch(selectType('人工智能（机器人、无人机）'))}/>
                    人工智能（机器人、无人机）
                  </label>
                  <label className='checkbox-inline'>
                    <input type='checkbox' value='智能家居、商业智能/BI' name='types'onClick={() => dispatch(selectType('智能家居、商业智能/BI'))}/>
                    智能家居、商业智能/BI
                  </label>
                  <label className='checkbox-inline'>
                    <input type='checkbox' value='消费电子' name='types' onClick={() => dispatch(selectType('消费电子'))}/>
                    消费电子
                  </label>
                </div>
                <div>
                  <label className='checkbox-inline'>
                    <input type='checkbox' value='新材料' name='types' onClick={() => dispatch(selectType('新材料'))}/>
                    新材料
                  </label>
                  <label className='checkbox-inline'>
                    <input type='checkbox' value='教育' name='types' onClick={() => dispatch(selectType('教育'))}/>
                    教育
                  </label>
                  <label className='checkbox-inline'>
                    <input type='checkbox' value='文化创意' name='types' onClick={() => dispatch(selectType('文化创意'))}/>
                    文化创意
                  </label>
                  <label className='checkbox-inline'>
                    <input type='checkbox' value='新媒体' name='types' onClick={() => dispatch(selectType('新媒体'))}/>
                    新媒体
                  </label>
                  <label className='checkbox-inline'>
                    <input type='checkbox' value='体育' name='types' onClick={() => dispatch(selectType('体育'))}/>
                    体育
                  </label>
                  <label className='checkbox-inline'>
                    <input type='checkbox' value='其他' name='types' onClick={() => dispatch(selectType('其他'))}/>
                    其他
                  </label>
                </div>
              </div>

              <br/>

              <div className='form-group'>
                <label>一句话概括项目内容</label>
                <input type='text' name='desc' className='form-control' />
              </div>
            </fieldset>

            <br/>

            <div style={styles.submit}>
              <button type='submit' className='btn btn-primary' style={styles.submitButton}>提交</button>
            </div>
          </form>
        </div>
        <SuccessMsg />
        <FailedMsg />
      </div>
    )
  }

  renderTypes (types) {
    return types.map((type, index) => {
      return <button
        style={styles.typeButton}
        key={index}
        type='button'
        className='btn btn-primary btn-xs'>
        {type}
      </button>
    })
  }

  renderUploadButton () {
    const { uploading, bizplanPDF } = this.props

    if (uploading || bizplanPDF.PDFUrl) {
      return ''
    } else {
      return <UploadButton />
    }
  }

  renderPDF () {
    const { dispatch, bizplanPDF, uploading, removePDF } = this.props
    const { PDFName } = bizplanPDF

    if (uploading) {
      return <p>上传中...请稍后</p>
    } else if (PDFName) {
      return (
        <div style={styles.renderPDF}>
          <p>{PDFName} 上传成功!</p>
          <a onClick={() => dispatch(removePDF())}><i className='fa fa-times'></i>重新上传</a>
        </div>
      )
    }
  }

  handleSubmit (e) {
    const { dispatch, bizplanPDF, addBizplan } = this.props
    dispatch(addBizplan(e, bizplanPDF))
  }
}

BizplansAdd.propTypes = {
  dispatch: PropTypes.func,
  state: PropTypes.object,
  addBizplan: PropTypes.func,
  bizplanPDF: PropTypes.object,
  uploading: PropTypes.bool,
  removePDF: PropTypes.func,
  selectType: PropTypes.func,
  selectedTypes: PropTypes.array
}

const styles = {
  root: {
    marginTop: '60px',
    marginBottom: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  headTitle: {
    fontSize: '30px',
    color: '#5AB152',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  horizontalLine: {
    border: '0',
    clear: 'both',
    display: 'block',
    width: '70%',
    backgroundColor: 'blue',
    height: '1px'
  },
  headSubTitle: {
    fontSize: '25px'
  },
  title: {
    fontWeight: 'bold',
    fontSize: '20px',
    color: '#595757',
    lineHeight: '40px',
    textAlign: 'center',
    borderBottom: '1px solid #c9cacb',
    margin: '0 auto',
    padding: '2% 0'
  },
  submit: {
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  submitButton: {
    width: '200px',
    height: '50px'
  },
  renderPDF: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  typeButton: {
    marginTop: '5px'
  }
}
