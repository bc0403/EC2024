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
        { text: '01-电路基本概念', link: '/concepts' },
        { text: '02-电路的等效变换', link: '/transform' },
        { text: '03-电路分析的基本方法和定理', link: '/methods' },
        { text: '04-动态电路的时域分析', link: '/transition' },
        { text: '05-正弦稳态电路的相量分析', link: '/phasor' },
        // { text: '谐振电路和滤波器', link: '/resonator' },
        // { text: '磁耦合电路', link: '/coupling' }
      ]
    },
    {
      text: 'Microelectronic Circuits',
      collapsible: true,
      items: [
        { text: '06-二极管及其应用电路', link: '/diode' },
        { text: '07-三极管及其放大电路', link: '/bjt' },
        { text: '08-场效应晶体管及其放大电路', link: '/mosfet' },
        { text: '09-理想运算放大器及其应用电路', link: '/opam' },
        // { text: '差分和多级放大器', link: '/diff' },
        { text: '10-频率响应', link: '/freq' },
        { text: '11-反馈', link: '/feedbak' },
        { text: '12-功率放大器', link: '/pa' },
        { text: '综合', link: '/int' }
      ]
    }
  ]
}
