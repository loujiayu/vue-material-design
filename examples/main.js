import Vue from 'vue'
import Router from 'vue-router'
import configRouter from './routes'

Vue.use(Router)
// const router = new Router({
//   history: true,
//   saveScrollPosition: true
// })

var router = new Router()

configRouter(router)

var App = require('./app.vue')

router.start(App, '#app')

// new Vue({
//   el: 'body',
//   components: {
//     app
//   }
// })
