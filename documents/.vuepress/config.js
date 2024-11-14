const CONST = require("./const");
const path = require('path');

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
      link: 'https://dyks-organization.gitbook.io/undefined/'
    }]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '.gitbook/assets': path.resolve(__dirname, '../gitbook-pages/.gitbook/assets'),
        //.'.gitbook/assets': path.resolve(__dirname, './documents/gitbook-pages/.gitbook/assets'),
      },
    },
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|webp)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
              },
            },
          ],
        },
      ],
    },
  },
}