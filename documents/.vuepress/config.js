var CONST = require("./const");

module.exports = {
  title: `Today I Learned`,
  description: `DoYeon's Personal Wiki (Today I Learned)`,
  base: "/TIL/",
  dest: 'build',
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
      }
    ],
    nav: [{
      text: 'GitHub',
      link: 'https://github.com/dyk4ever0/'
    }, {
      text: 'Blog',
      link: 'https://floatingavocadoseed.tistory.com/'
    }
    ]
  },
}