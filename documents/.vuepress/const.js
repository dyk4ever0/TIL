const fs = require('fs');
const path = require('path');

function getMarkdownFiles(dir) {
  const baseDir = path.resolve(__dirname, '../'); 
  const targetDir = path.join(baseDir, dir);

  return fs.readdirSync(targetDir)
    .filter(file => file.endsWith('.md'))
    .map(file => `${dir}/${file}`);
}

exports.DevOpsList = getMarkdownFiles('DevOps');
exports.DataBaseList = getMarkdownFiles('DataBase');
exports.gitbookList = getMarkdownFiles('gitbook-pages');

/*
exports.DevOpsList = ["DevOps/docker.md", "DevOps/vupress-github-actions.md"];
exports.DataBaseList = ["DataBase/Redis.md"];
exports.gitbookList = ["gitbook-pages/serverUSA.md"];
*/
