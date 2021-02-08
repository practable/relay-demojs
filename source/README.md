# relay-demojs

## Project setup
```
npm install
```

## Install modified jsmpeg player


This supposedly requires the repo to be installed locally, built, and then pushed to the repo with the dist folder.

try this...
https://stackoverflow.com/questions/40528053/npm-install-and-build-of-forked-github-repo
It's ugly, but in this case you will have to remove dist/ from the .gitignore and then run:
```
npm install --save-dev cross-env
cd src
npm run build
git add .
git commit
git push
npm install --save https://github.com/timdrysdale/jsmpeg-player
```

### Testing connection drop

log into an experiment
```
#simdrop.sh
#!/bin/bash
curl -X POST -H "Content-Type: application/json" -d '{"stream":"video","destination":"'"${videoAccess}"'","id":"0","token":"'"${videoToken}"'"}' http://localhost:8888/api/destinations
sleep .5
/usr/local/bin/session-rules
```



### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
