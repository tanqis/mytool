import Vue from 'vue'
import Router from 'vue-router'

//根目录
import Index from '@/components/Index'

//home
import Main from "@/views/home/Main.vue";

//finance
// import FinanceMap from '@/views/finance/FinanceMap'

//lineAccounts
import Accounts from '@/views/lineAccounts/Index'

//lifeDays
import LifeDays from '@/views/lifeDays/Index'

//mindMap
import MindMapList from '@/views/mindMap/MindMapList'
import ViewGraph from '@/views/mindMap/ViewGraph'
import MindMapManage from '@/views/mindMap/mindMapManage'

//myself
import Myself from '@/views/myself/Index'

//toDos
import ToDos from '@/views/toDos/Index'

//toolHelp
import ToolHelp from '@/views/toolHelp/Index'
import ActiveAnimat from '@/views/toolHelp/ActiveAnimat'
import FontHelp from '@/views/toolHelp/FontHelp'

//user
import LogIn from '@/views/users/LogIn'
import ForgetPwd from '@/views/users/ForgetPwd'
import Register from '@/views/users/Register'

//financialCalculations
import fcIndex from '@/views/financialCalculations/Index'
import Calculatioins from '@/views/financialCalculations/Calculatioins'

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
      // {
      //   path: '/financeMap',
      //   name: 'FinanceMap',
      //   component: FinanceMap
      // },
      {
        path: '/accounts',
        name: 'Accounts',
        component: Accounts
      },
      {
        path: '/lifeDays',
        name: 'LifeDays',
        component: LifeDays
      },
      {
        path: '/mindMap',
        name: 'MindMapList',
        component: MindMapList,
        children: []
      },
      {
        path: '/viewGraph',
        name: 'ViewGraph',
        component: ViewGraph
      },
      {
        path: '/mindMapManage',
        name: 'MindMapManage',
        component: MindMapManage
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
      },
      {
        path: '/fcIndex',
        name: 'FCIndex',
        component: fcIndex
      },
      {
        path: '/calculatioins',
        name: 'Calculatioins',
        component: Calculatioins
      }, {
        path: '/user/logIn',
        name: 'user',
        component: LogIn
      }
    ]
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