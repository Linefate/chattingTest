import Vue from 'vue'
import Router from 'vue-router'
import ChattingEntrance from './views/chattingEntrance.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'chattingEntrance',
      component: ChattingEntrance
    }
  ]
})
