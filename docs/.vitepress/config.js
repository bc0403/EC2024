import mathjax3 from 'markdown-it-mathjax3';
const customElements = ['mjx-container'];

export default {
  title: 'Fundamentals of Electronic Circuits',
  description: 'course material',
  base: '/EC2024',
  lastUpdated: true,

  //Theme related configurations
  themeConfig: {
    sidebar: {
      '/': sidebarEC()
      // '/mc/': sidebarMC()
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bc0403/EC2024' }
    ]
  },

  // for latex
  markdown: {
    config: (md) => {
      md.use(mathjax3);
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },

  // for size warning
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  }
};

function sidebarEC() {
  return [
    {
      text: 'Electric Circuits',
      collapsible: true,
      items: [
        { text: '课程简介', link: '/' },
        { text: '电路基本概念', link: '/concepts' },
        { text: '电路分析的基本方法和定理', link: '/methods' },
        { text: '正弦交流电路', link: '/phasor' },
        { text: '过渡过程的经典解法', link: '/transition' },
        { text: '谐振电路和滤波器', link: '/resonator' },
        { text: '磁耦合电路', link: '/coupling' }
      ]
    },
    {
      text: 'Microelectronic Circuits',
      collapsible: true,
      items: [
        { text: '二极管', link: '/diode' },
        { text: '三极管', link: '/bjt' },
        { text: '场效应晶体管', link: '/mosfet' },
        { text: '差分和多级放大器', link: '/diff' },
        { text: '频率响应', link: '/freq' },
        { text: '反馈', link: '/feedbak' },
        { text: '功率放大器', link: '/pa' },
        { text: '运算放大器', link: '/opam' },
        { text: '综合', link: '/int' }
      ]
    }
  ]
}
