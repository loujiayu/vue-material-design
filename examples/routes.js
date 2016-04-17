import {
  ButtonView,
  IconButtonView,
  CheckBoxView,
  DownMenuView,
  IconMenuView,
  MenuBarView } from './components'

export default function configRouter (router) {
  // normal routes
  router.map({
    '/components/button': {
      component: ButtonView
    },
    '/components/iconbutton': {
      component: IconButtonView
    },
    'components/checkbox': {
      component: CheckBoxView
    },
    'components/downmenu': {
      component: DownMenuView
    },
    'components/iconmenu': {
      component: IconMenuView
    },
    'components/menubar': {
      component: MenuBarView
    }
  })
}
