#!/usr/bin/env sh

# 发生错误时终止
set -e

# 构建
npm install
npm run build

# 进入构建文件夹
cd dist

# 放置 .nojekyll 以绕过 Jekyll 的处理。
echo > .nojekyll

# 如果你要部署到自定义域名
echo 'demonskp.com.cn' > CNAME

git init
git checkout -B master
git add -A
git commit -m 'deploy'

# 如果你要部署在 https://<USERNAME>.github.io
git push -f git@github.com:demonskp/demonskp.github.io.git main

# 如果你要部署在 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

cd -
