const path = require('path');

module.exports = {
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
      },
    ],
    ['meta', { name: 'keywords', content: 'garron' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  title: 'garron',
  base: '/',
  description: 'garron',
  dest: 'public',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '工作', link: '/work/' },
      { text: 'plots', link: '/plots/' },
      { text: '阅读', link: '/read/' },
      { text: '思考', link: '/think/' },
    ],
    sidebar:{
      '/':[
        {
          text:'plots',
          children: [
           
            { text: 'area', link: 'plots/area/' },
            { text: 'bar', link: 'plots/bar/' },
           
          ],
        },
        {
          text:'work',
          
        }
      ]
    }
  }
};
