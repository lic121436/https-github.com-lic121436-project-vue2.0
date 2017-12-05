import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pages/index.vue'
import OrderList from '../pages/orderList.vue'
import DetailPage from '../pages/detail.vue'
import Count from '../pages/detail/count.vue'
import Analysis from '../pages/detail/analysis.vue'
import ForeCast from '../pages/detail/forecast.vue'
import Publish from '../pages/detail/publish.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            component: IndexPage
        },
        {
            path: '/orderList',
            component: OrderList
        },
        {
            path: '/detail',
            component: DetailPage,
            redirect: '/detail/analysis',
            children: [{
                    path: 'count',
                    component: Count
                },
                {
                    path: 'analysis',
                    component: Analysis
                },
                {
                    path: 'forecast',
                    component: ForeCast
                },
                {
                    path: 'publish',
                    component: Publish
                }
            ]
        }
    ]
})