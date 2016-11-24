import { useDeps } from 'react-simple-di'
import { withLifecycle, composeAll } from 'react-komposer-plus'
import RegistUploader from '../../helpers/uploader'

import UploadButton from '../../components/bizplansAdd/uploadButton'

const lifeCycle = {
  componentDidMount () {
    const { qiniuDomain, dispatch, uploadingPDF, addPDF, uploadedPDF } = this.props
    const Uploader = RegistUploader(qiniuDomain, dispatch, uploadingPDF, addPDF, uploadedPDF)
    Uploader('bizplanPDF')
  }
}

const depsToProps = (context, actions) => {
  return {
    context,
    dispatch: context.dispatch,
    qiniuDomain: context.configs.core.qiniu.DOMAIN_NAME,
    ...actions.bizplans
  }
}

export default composeAll(
  withLifecycle(lifeCycle),
  useDeps(depsToProps)
)(UploadButton)
