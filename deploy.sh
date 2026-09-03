#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn docs:build

# navigate into the build output directory
cd docs/.vitepress/dist

# create a clean temporary Git repository
rm -rf .git
git init

git add -A
git commit -m 'deploy'

# deploy to GitHub Pages
git push -f https://github.com/bc0403/EC2024.git HEAD:gh-pages

cd -
