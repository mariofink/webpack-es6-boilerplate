# Webpack ES6/ES2015 Boilerplate
Write ES6/ES2015 code and compile to ES5 via webpack.

## Files & Directories
```
    .
    |-- app
    |   |-- scripts
    |   |   |-- dist (webpack will put the compiled files into this directory - not in repository)
    |   |   |   |-- bundle.js (webpack bundle output - not in repository)
    |   |   |   `-- bundle.js.map (source map - not in repository)
    |   |   `-- src
    |   |       |-- ArrowFunctions.js
    |   |       |-- Rectangle.js
    |   |       `-- main.js (webpack entry point - referenced in webpack.config.js)
    |   `-- index.html (plain html file loading ./dist/bundle.js)
    |-- package.json
    `-- webpack.config.js 
```

## Rebuild sources automatically
```
npm run watch
```
or use webpack-dev-server
```
npm run devserver
```
