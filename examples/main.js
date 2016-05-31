import Vue from 'vue'
import Router from 'vue-router'
import configRouter from './routes'

Vue.use(Router)

var router = new Router()

configRouter(router)

var App = require('./app.vue')

router.start(App, '#app')
