#!/bin/bash

# prepare git hooks
npx husky install

# prepare next directory
cd next
npm i

cd ..

# prepare payload directory
cd payload
npm i
