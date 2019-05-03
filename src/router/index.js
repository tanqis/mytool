import Vue from 'vue'
import Router from 'vue-router'

//根目录
import Index from '@/components/Index'

//test
import HelloWorld from '@/components/views/test/HelloWorld'
import HomeToDos from '@/components/views/test/HomeToDos'

//home
import Main from "@/components/views/home/Main.vue";

//finance
import FinanceMap from '@/components/views/finance/FinanceMap'

//lineAccounts
import Accounts from '@/components/views/lineAccounts/Index'

//lifeDays
import LifeDays from '@/components/views/lifeDays/Index'

//mindMap
import MindMap from '@/components/views/mindMap/Index'
import ViewGraph from '@/components/views/mindMap/ViewGraph'

//myself
import Myself from '@/components/views/myself/Index'

//toDos
import ToDos from '@/components/views/toDos/Index'

//toolHelp
import ToolHelp from '@/components/views/toolHelp/Index'
import ActiveAnimat from '@/components/views/toolHelp/ActiveAnimat'
import FontHelp from '@/components/views/toolHelp/FontHelp'

//user
import LogIn from '@/components/views/users/LogIn'
import ForgetPwd from '@/components/views/users/ForgetPwd'
import Register from '@/components/views/users/Register'

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
        component: MindMap,
        children: []
      },
      {
        path: '/viewGraph',
        name: 'ViewGraph',
        component: ViewGraph
      }, {
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
  }, {
    path: '/user/logIn',
    name: 'user',
    component: LogIn
  }, {
    path: '/user/forgetPwd',
    name: 'ForgetPwd',
    component: ForgetPwd,
  }, {
    path: '/user/register',
    name: 'Register',
    component: Register,
  }]
})