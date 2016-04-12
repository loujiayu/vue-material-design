import ButtonView from './components/ButtonView.vue'
import IconButtonView from './components/IconButtonView.vue'

export default function configRouter (router) {
  // normal routes
  router.map({
    '/components/button': {
      component: ButtonView
    },
    '/components/iconbutton': {
      component: IconButtonView
    }
  })
}
