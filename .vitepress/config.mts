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
        link: '/personal-resume/resume',
        activeMatch: 'personal-resume'
      },
      {
        text: '知识库',
        link: '/knowledge-base/getting-started',
        activeMatch: 'knowledge-base'
      },
      {
        text: '常见问题',
        link: '/problem-solving/interview',
        activeMatch: 'problem-solving'
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
      '/problem-solving/': [
        {
          text: '总览',
          items: [
            { text: '前端面试题', link: '/problem-solving/interview' },
           
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
                { text: '前端历史', link: '/knowledge-base/html-css/front-end-home' },
                { text: 'HTML核心', link: '/knowledge-base/html-css/html' },
                { text: 'CSS选择器', link: '/knowledge-base/html-css/priority-misunderstanding' },
                { text: '滚动条控制规范', link: '/knowledge-base/html-css/scrollbar' },
                { text: 'css动画', link: '/knowledge-base/html-css/css' },
              ]
              
            },
            {
              text: '工程化Engineering',
              items: [
                { text: '如何画好一张架构图', link: '/knowledge-base/engineering/front-picture' },
                { text: 'NPM包的创建', link: '/knowledge-base/engineering/npm' }
              ]
            }
          ]
        }
      ],
      '/personal-resume/': [
        {
          text: '总览',
          items: [
            { text: '个人简介', link: '/personal-resume/resume' },
            { text: '项目经历', link: '/personal-resume/project' },
            { text: '兴趣爱好', link: '/personal-resume/hobby' }
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
        icon: 'github',
        link: 'https://github.com/Appidd'
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
      message: `<div style="display: flex;justify-content: center;align-items: center;">
<a href="https://beian.miit.gov.cn/" target="_blank">备案号：蜀ICP备2024085068号-1</a>
<div style="display: flex;align-items: center;margin-left: 20px;">
<img src="/icon/record.png" alt="license" style="width: 20px;height: 20px;margin-right: 10px;">
<a href="https://beian.mps.gov.cn/#/query/webSearch?code=51011202000847" rel="noreferrer" target="_blank">川公网安备51011202000847号</a>
</div>
</div>`
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
