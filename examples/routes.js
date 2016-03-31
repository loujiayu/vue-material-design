import button from './components/button.vue'

export default function configRouter (router) {

  // normal routes
  router.map({
    // basic example
    '/components': {
      component: button,
      subRoutes: {
        '/button': {
          component: button
        }
      }
    }
  })
  router.redirect({
    '/components': '/components/button'
  })
}
