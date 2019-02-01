import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import HelloWorld from '@/components/views/HelloWorld'
import Main from "@/components/views/Main.vue";
import FontHelp from '@/components/views/FontHelp'

import FinanceMap from '@/components/views/finance/FinanceMap'
import Accounts from '@/components/views/Accounts'
import HomeToDos from '@/components/views/HomeToDos'
import LifeDays from '@/components/views/lifeDays/Index'
import MindMap from '@/components/views/mindMap/Index'
import Myself from '@/components/views/myself/Index'
import ToDos from '@/components/views/toDos/Index'
import ToolHelp from '@/components/views/toolHelp/Index'
import ActiveAnimat from '@/components/views/toolHelp/ActiveAnimat'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: Index,
    children: [{
        path: '',
        component: Main
      },
      {
        path: '/fontHelp',
        name: 'FontHelp',
        component: FontHelp
      },
      {
        path: '/financeMap',
        name: 'FinanceMap',
        component: FinanceMap
      },
      {
        path: '/accounts',
        name: 'Accounts',
        component: Accounts
      },
      {
        path: '/homeToDos',
        name: 'HomeToDos',
        component: HomeToDos
      },
      {
        path: '/lifeDays',
        name: 'LifeDays',
        component: LifeDays
      },
      {
        path: '/mindMap',
        name: 'MindMap',
        component: MindMap
      },
      {
        path: '/myself',
        name: 'Myself',
        component: Myself
      },
      {
        path: '/toolHelp',
        name: 'ToolHelp',
        component: ToolHelp
      },
      {
        path: '/activeAnimat',
        name: 'ActiveAnimat',
        component: ActiveAnimat
      },
      {
        path: '/toDos',
        name: 'ToDos',
        component: ToDos
      }
    ]
  }, {
    path: '/test',
    name: 'HelloWorld',
    component: HelloWorld
  }]
})