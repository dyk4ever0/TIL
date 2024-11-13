var CONST = require("./const");

module.exports = {
  title: `Today I Learned`,
  description: `Doyeon's Personal Wiki (Today I Learned)`,
  base: "/TIL/",
  dest: './dist',
  head: [
    ['link', {
      rel: 'icon',
      href: '/logo.png'
    }]
  ],
  themeConfig: {
    sidebar: [
      {
        title: 'DevOps',
        children: CONST.DevOpsList
      },
      {
        title: 'DataBase',
        children: CONST.DataBaseList
      },
      {
        title: 'gitbook-pages',
        children: CONST.gitbookList
      }
    ],
    nav: [{
      text: 'GitHub',
      link: 'https://github.com/dyk4ever0/'
    }, {
      text: 'Blog',
      link: ''
    }
    ]
  },
}
