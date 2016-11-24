import { useDeps } from 'react-simple-di'
import { withLifecycle, withRedux, composeAll } from 'react-komposer-plus'

import BizplansAdd from '../../components/bizplansAdd'

const lifeCycle = {
  componentWillUnmount () {
    const { dispatch, cleanselectedTypes, removePDF } = this.props
    dispatch(cleanselectedTypes())
    dispatch(removePDF())
  }
}

const mapStateToProps = (state) => {
  const { selectedTypes, bizplanPDF, uploading } = state

  return {
    selectedTypes,
    bizplanPDF,
    uploading
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
  withRedux(mapStateToProps),
  useDeps(depsToProps)
)(BizplansAdd)
