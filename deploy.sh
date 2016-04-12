#!/bin/bash

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

npm run build || exit 1

cd 9renpoto.github.io

git checkout master
git add -A

msg="[ci skip] rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -am "$msg"
git push origin master
