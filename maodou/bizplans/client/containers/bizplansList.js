import { useDeps } from 'react-simple-di'
import { withTracker, composeAll } from 'react-komposer-plus'

import BizplansList from '../components/bizplansList'

const data = ({ context }, onData) => {
  const { Meteor, Collections } = context
  if (Meteor.subscribe('bizplans.list').ready()) {
    const bizplans = Collections.Bizplans.find({}, { sort: { createdAt: -1 } }).fetch()

    onData(null, {
      bizplans
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
)(BizplansList)
