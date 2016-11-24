import { useDeps } from 'react-simple-di'
import { withTracker, composeAll } from 'react-komposer-plus'

import SingleBizplan from '../components/singleBizplan'

const data = ({ context, params }, onData) => {
  const { Meteor, Collections } = context
  if (Meteor.subscribe('bizplans.list').ready()) {
    const bizplan = Collections.Bizplans.findOne({ _id: params.id})
    onData(null, {
      bizplan
    })
  }
}

const depsToProps = (context, actions) => ({
  context,
  dispatch: context.dispatch
})

export default composeAll(
  withTracker(data),
  useDeps(depsToProps)
)(SingleBizplan)
