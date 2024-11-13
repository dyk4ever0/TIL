exports.DevOpsList = ["DevOps/docker.md", "DevOps/vupress-github-actions.md"];
exports.DataBaseList = ["DataBase/Redis.md"];

const fs = require("fs");
const path = require("path");

// GitBook에서 자동으로 연동된 파일들을 목록화
const gitbookSpaceDir = path.resolve(__dirname, "../gitbook_space");
exports.GitBookSpaceList = fs.readdirSync(gitbookSpaceDir)
    .filter(file => file.endsWith(".md")) // .md 파일만 가져오기
    .map(file => `gitbook_space/${file}`); // 경로 포함하여 파일명 리스트 생성