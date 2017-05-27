#!/bin/bash
npm run clean || exit 1
mkdir dist && cd dist
git init
git remote add origin git@github.com:9renpoto/9renpoto.github.io.git
git pull origin master
find . -not -path '*/\.*' | xargs rm
cd ..
npm run build:content || exit 1
cd dist
git add -A
git commit -am "Updated"
git push origin master
