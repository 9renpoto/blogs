#!/bin/bash

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

cd 9renpoto.github.io

git add -A

msg="[ci skip] rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"

git push origin master

cd ..

git commit -m '[ci skip] publish'
git push origin master
