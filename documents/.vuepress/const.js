const fs = require('fs');
const path = require('path');

function getMarkdownFiles(dir) {
  const baseDir = path.resolve(__dirname, '../'); 
  const targetDir = path.join(baseDir, dir);

  const files = fs.readdirSync(targetDir)
    .filter(file => file.endsWith('.md'))
    .map(file => file === 'README.md' ? `${dir}/` : `${dir}/${file}`);

  console.log(`Markdown files in ${dir}:`, files);
  
  return files;
}

exports.DevOpsList = getMarkdownFiles('DevOps');
exports.DataBaseList = getMarkdownFiles('DataBase');
exports.gitbookList = getMarkdownFiles('gitbook-pages');

/*
exports.DevOpsList = ["DevOps/docker.md", "DevOps/vupress-github-actions.md"];
exports.DataBaseList = ["DataBase/Redis.md"];
exports.gitbookList = ["gitbook-pages/serverUSA.md"];
*/
