#!/bin/bash

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

cd dist
git init
git remote add origin git@github.com:9renpoto/9renpoto.github.io.git
git pull origin master
cd ..

npm run build || exit 1

msg="[ci skip] rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi

cd dist

git add -A
git commit -am "$msg"
git push origin master
