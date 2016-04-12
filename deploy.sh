#!/bin/bash

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

cd 9renpoto.github.io
git checkout master
git pull origin master

cd ..
npm run build || exit 1

cd 9renpoto.github.io

msg="[ci skip] rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi

git add -A
git commit -am "$msg"
git push origin master
