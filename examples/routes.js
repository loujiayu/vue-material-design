import ButtonView from './components/ButtonView.vue'

export default function configRouter (router) {

  // normal routes
  router.map({
    // basic example
    '/components': {
      component: ButtonView,
      subRoutes: {
        '/button': {
          component: ButtonView
        }
      }
    }
  })
  router.redirect({
    '/components': '/components/button'
  })
}
