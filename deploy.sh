#!/bin/bash

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

npm run build || exit 1

cd dist

msg="[ci skip] rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi

git init
git remote add git@github.com:9renpoto/9renpoto.github.io.git
git add -A
git commit -am "$msg"
git push origin master
