
import type { Theme } from 'vitepress'
import VPBadge from 'vitepress/dist/client/theme-default/components/VPBadge.vue'
import Antd from 'ant-design-vue'
import dayjs from 'dayjs'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'
import Layout from '../components/Layout.vue'
import DocSidebar from '../components/DocSidebar.vue'
import locale from 'ant-design-vue/es/locale/zh_CN'
import 'dayjs/locale/zh-cn'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import 'ant-design-vue/dist/antd.variable.less'
import './style.less'
dayjs.locale('zh-cn')

const theme: Theme = {
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.component('DocSidebar', DocSidebar)
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
    app.component('Badge', VPBadge)
    app.provide('locale', locale)
    app.use(Antd as any)
  }
}

export default theme
