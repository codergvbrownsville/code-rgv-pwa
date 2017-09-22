#!/bin/bash
npm run build-prod && 
$(npm bin)/tsc &&
mv ./out-tsc/server dist/