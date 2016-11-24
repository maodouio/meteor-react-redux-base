import BizplansList from './containers/bizplansList'
import SingleBizplan from './containers/singleBizplan'
import BizplansAdd from './containers/bizplansAdd'

export default function (injectDeps, { configs }) {
  const routes = {
    '/admin': ['bizplans'],

    // insert routes for other layouts here

    '/': [
      {path: '/bizplans/list', component: BizplansList},
      {path: '/bizplan/add', component: BizplansAdd},
      {path: '/bizplan/:id', component: SingleBizplan},
    ]
  }

  return routes
}
