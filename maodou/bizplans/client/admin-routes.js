import BizplansAdmin from './components/admin'
import BizplansList from './containers/admin/bizplansList'
import Bizplan from './containers/admin/bizplan'

export default function (injectDeps, { configs }) {
  const routes = [
    {path: 'bizplans', component: BizplansAdmin, childRoutes: []},
    {path: 'bizplan/:id', component: Bizplan, childRoutes: []}
  ]

  const subMenu = configs.bizplans.subMenu
  const subMenuComponents = [
    BizplansList
  ]
  subMenu.map((menu, index) => {
    routes[0].childRoutes.push({
      path: menu.href,
      component: subMenuComponents[index]
    })
  })

  return routes
}
