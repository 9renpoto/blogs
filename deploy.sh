#!/bin/bash
npm run clean || exit 1
mkdir -p dist && cd dist
git init
git remote add blog git@github.com:9renpoto/9renpoto.github.io.git
git pull blog master
cd ..
find dist -not -iwholename '*.git/*' | grep -v dist/.git | xargs rm && npm run build || exit 1
cd dist
git add -A
git commit -am "Updated"
git push blog master
