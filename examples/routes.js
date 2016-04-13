import {ButtonView, IconButtonView, CheckBoxView} from './components'

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
    }
  })
}
