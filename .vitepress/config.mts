// import { fileURLToPath, URL } from 'node:url'
import path from 'path'
import { defineConfig } from 'vitepress'
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock'
import { tocPlugin } from '@mdit-vue/plugin-toc'
import copyChangelog from './configs/changelog'

const year = new Date().getFullYear()
copyChangelog()

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '个人文档',
  description: '个人文档',
  srcDir: './src',
  outDir: './dist',
  themeConfig: {
    outline: [2, 3],
    nav: [
      { text: '指南', link: '/guide/getting-started', activeMatch: 'guide' },
      {
        text: '个人简历',
        link: '/base-components/getting-started',
        activeMatch: 'base-components'
      },
      {
        text: '知识库',
        link: '/knowledge-base/getting-started',
        activeMatch: 'knowledge-base'
      },
      {
        text: '问题记录',
        link: '/common/http-client/getting-started',
        activeMatch: 'common'
      },
      {
        text: '其他',
        link: '/plugins/payment-article-plugin/getting-started',
        activeMatch: 'plugins'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [{ text: '快速上手', link: '/guide/getting-started' }]
        }
      ],
      '/base-components/': [
        {
          text: '组件总览',
          items: [
            { text: '更新日志', link: '/base-components/CHANGELOG' },
            { text: '快速上手', link: '/base-components/getting-started' },
            {
              text: '通用',
              items: [{ text: '按钮', link: '/base-components/button' }]
            },
            {
              text: '选择',
              items: [
                { text: '菜单', link: '/base-components/menu' },
                { text: '下拉菜单', link: '/base-components/dropdown/dropdown' },
                { text: '选择器', link: '/base-components/dropdown/select' },
                { text: '日期选择器', link: '/base-components/dropdown/date-picker' },
                { text: '时间选择器', link: '/base-components/dropdown/time-picker' },
                { text: '级联选择器', link: '/base-components/dropdown/cascader' }
              ]
            },
            {
              text: '输入',
              base: '/base-components/input/',
              items: [
                { text: '输入框', link: 'input' },
                { text: '搜索框', link: 'search' },
                { text: '密码框', link: 'password' },
                { text: '文本域', link: 'textarea' },
                { text: '自动完成', link: 'auto-complete' },
                { text: '数字输入框', link: 'input-number' }
              ]
            },
            {
              text: '容器',
              items: [
                { text: '模态框', link: '/base-components/modal' },
                { text: '抽屉', link: '/base-components/drawer' },
                { text: '表格', link: '/base-components/table' },
                { text: '分页', link: '/base-components/pagination' },
                { text: '索引列表', link: '/base-components/index-list' },
                { text: '描述列表', link: '/base-components/description' },
                { text: 'Flex布局', link: '/base-components/flex' }
              ]
            },
            {
              text: '提示',
              base: '/base-components/tips/',
              items: [
                { text: '汇总', link: 'index' },
                { text: '省略内容提示', link: 'title' },
                { text: '功能性提示', link: 'tooltip' },
                { text: '展示性气泡', link: 'popover' },
                { text: '操作性气泡', link: 'popconfirm' },
                { text: '警告提示', link: 'alert' },
                { text: '消息提示', link: 'message' },
                { text: '通知提醒', link: 'notification' }
              ]
            },
            {
              text: '工具',
              items: [
                { text: '弹层', link: '/base-components/popup' },
                { text: '渲染器', link: '/base-components/vnode' }
              ]
            }
          ]
        }
      ],
      '/knowledge-base/': [
        {
          text: '总览',
          items: [
            { text: '更新日志', link: '/knowledge-base/CHANGELOG' },
            { text: '必知必会JavaScript', link: '/knowledge-base/getting-started' },
            { text: '进阶掌握TypeScript', link: '/knowledge-base/typescript-upgrade' },
            {
              text: '前端架构Architecture',
              items: [
                { text: '软件的抽象', link: '/knowledge-base/architecture/architecture-absolute' },
                { text: 'JavaScript 设计模式', link: '/knowledge-base/architecture/architecture-design' }
              ]
            },
            { text: '由浅入深HTML&CSS', 
              items:[
                { text: 'CSS选择器', link: '/knowledge-base/html-css/priority-misunderstanding' },
                { text: '前端历史', link: '/knowledge-base/html-css/front-end-home' },
                { text: '滚动条控制规范', link: '/knowledge-base/html-css/scrollbar' },
                { text: 'css动画', link: '/knowledge-base/html-css/css' },
              ]
              
            },
            {
              text: '展示',
              items: [
                { text: '合规卡片', link: '/knowledge-base/display/mode-card' },
                { text: '气泡提示', link: '/knowledge-base/display/biz-tooltips' }
              ]
            }
          ]
        }
      ],
      '/common/': [
        {
          base: '/common',
          text: '通用包',
          items: [
            {
              text: 'http-client',
              collapsed: true,
              items: [
                { text: '快速开始', link: '/http-client/getting-started' },
                { text: '更新日志', link: '/http-client/CHANGELOG' }
              ]
            },
            {
              text: 'directives',
              collapsed: true,
              items: [
                { text: '快速开始', link: '/directives/getting-started' },
                { text: '更新日志', link: '/directives/CHANGELOG' }
              ]
            },
            {
              text: 'hooks',
              collapsed: true,
              items: [
                { text: '快速开始', link: '/hooks/getting-started' },
                { text: '更新日志', link: '/hooks/CHANGELOG' }
              ]
            },
            {
              text: 'style',
              collapsed: true,
              items: [
                { text: '快速开始', link: '/style/getting-started' },
                { text: '更新日志', link: '/style/CHANGELOG' }
              ]
            },
            {
              text: 'utils',
              collapsed: true,
              items: [
                { text: '快速开始', link: '/utils/getting-started' },
                { text: '常量', link: '/utils/constants' },
                { text: '枚举', link: '/utils/enums' },
                { text: '类型', link: '/utils/types' },
                { text: '更新日志', link: '/utils/CHANGELOG' }
              ]
            },
            {
              text: 'pro-core',
              collapsed: true,
              items: [
                { text: '快速开始', link: '/pro-core/getting-started' },
                { text: '更新日志', link: '/pro-core/CHANGELOG' }
              ]
            },
            {
              text: 'eslint-config-prettier',
              collapsed: true,
              items: [
                { text: '快速开始', link: '/eslint-config-prettier/getting-started' },
                { text: '更新日志', link: '/eslint-config-prettier/CHANGELOG' }
              ]
            },
            {
              text: 'eslint-config-vue',
              collapsed: true,
              items: [
                { text: '快速开始', link: '/eslint-config-vue/getting-started' },
                { text: '更新日志', link: '/eslint-config-vue/CHANGELOG' }
              ]
            },
            {
              text: 'base-data',
              collapsed: true,
              items: [
                { text: '快速开始', link: '/base-data/getting-started' }
                // { text: '更新日志', link: '/base-data/CHANGELOG' }
              ]
            }
          ]
        }
      ],
      '/plugins/': [
        {
          base: '/plugins',
          text: '插件总览',
          items: [
            {
              text: '文章试读',
              collapsed: false,
              items: [
                { text: '更新日志', link: '/payment-article-plugin/CHANGELOG' },
                { text: '快速上手', link: '/payment-article-plugin/getting-started' },
                { text: '在线案例', link: '/payment-article-plugin/demo' }
              ]
            },
            {
              text: '数据埋点',
              collapsed: true,
              items: [
                { text: '微信小程序', link: '/ca-sdk-miniprogram/getting-started' },
                { text: '更新日志', link: '/ca-sdk-miniprogram/CHANGELOG' },
                { text: '数据查询', link: '/ca-sdk-miniprogram/analytics' }
              ]
            },
            {
              text: '富文本编辑器',
              collapsed: true,
              items: [
                { text: '快速上手', link: '/crab-wangeditor/getting-started' },
                { text: '在线案例', link: '/crab-wangeditor/demo' }
              ]
            },
            {
              text: '动态表单',
              collapsed: true,
              items: [
                { text: '快速上手', link: '/crab-form-builder/getting-started' },
                { text: '在线案例', link: '/crab-form-builder/demo' }
              ]
            }
          ]
        }
      ]
    },
    socialLinks: [
      {
        icon: {
          svg: `<svg width="24" height="24" class="tanuki-logo" viewBox="0 0 36 36">
							<path class="tanuki-shape tanuki-left-ear" fill="#e24329" d="M2 14l9.38 9v-9l-4-12.28c-.205-.632-1.176-.632-1.38 0z"></path>
							<path class="tanuki-shape tanuki-right-ear" fill="#e24329" d="M34 14l-9.38 9v-9l4-12.28c.205-.632 1.176-.632 1.38 0z"></path>
							<path class="tanuki-shape tanuki-nose" fill="#e24329" d="M18,34.38 3,14 33,14 Z"></path>
							<path class="tanuki-shape tanuki-left-eye" fill="#fc6d26" d="M18,34.38 11.38,14 2,14 6,25Z"></path>
							<path class="tanuki-shape tanuki-right-eye" fill="#fc6d26" d="M18,34.38 24.62,14 34,14 30,25Z"></path>
							<path class="tanuki-shape tanuki-left-cheek" fill="#fca326" d="M2 14L.1 20.16c-.18.565 0 1.2.5 1.56l17.42 12.66z"></path>
							<path class="tanuki-shape tanuki-right-cheek" fill="#fca326" d="M34 14l1.9 6.16c.18.565 0 1.2-.5 1.56L18 34.38z"></path>
						</svg>`
        },
        link: 'http://git.medcrab.com/saas-html/medcrab-business-ui'
      }
    ],
    search: {
      provider: 'local'
    },

    outlineTitle: '目录',
    lastUpdatedText: '上次更新',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    footer: {
      message: `Copyright © 1996-${year} Cordial999 版权所有 Zhangbin.liu `
    }
  },
  markdown: {
    toc: {},
    theme: { light: 'material-theme-palenight', dark: 'material-theme-palenight' },
    // lineNumbers: true,
    config: (md) => {
      // @ts-ignore
      md.use(demoblockPlugin).use(tocPlugin)
    }
  },
  vite: {
    build: {
      ssr: false,
      chunkSizeWarningLimit: 1024,
      rollupOptions: {
        output: {
          manualChunks: {
            'ant-design-vue': ['ant-design-vue'],
            '@ant-design/icons-vue': ['@ant-design/icons-vue'],
            vue: ['vue']
          }
        }
      }
    },
    plugins: [demoblockVitePlugin()],
    ssr: {
      noExternal: [
        
      ]
    },
    // legacy: {
    // 	buildSsrCjsExternalHeuristics: true
    // },
    optimizeDeps: {
     
    },
    resolve: {
      alias: [
        {
          find: '@/services',
          replacement: path.resolve(__dirname, '../services/')
        },
        {
          find: '@/demo',
          replacement: path.resolve(__dirname, '../demo/')
        }
      ]
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
           
          },
          javascriptEnabled: true
        }
      }
    },
    server: {
      host: '0.0.0.0',
      port: 80,
      proxy: {
        '/api': {
          // target: 'http://devsaas.medcrab.com',
          target: 'http://testsaas.medcrab.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
        '/pub': {
          // target: 'http://devsaas.medcrab.com',
          rewrite: (path) => path.replace(/^\/api/, ''),
          target: 'http://testsaas.medcrab.com',
          changeOrigin: true
          // rewrite: (path) => path.replace(/^\/pub/, '')
        }
      }
    }
  }
})
