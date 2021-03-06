# Webpack ES6/ES2015 Boilerplate
Write ES6/ES2015 code and compile to ES5 via webpack.

This boilerplate proudly does **NOT** depend on the following:
* React
* AngularJS
* Ember
* …insert other fancy framework…

Only [webpack](http://webpack.github.io/) and [Babel](http://babeljs.io/) are required.

## Getting started
After getting the source code, you first need to fetch the dependencies defined in package.json by running
```
npm install
```

You can then bundle the example files under **app/scripts/src** into **app/scripts/dist/bundle.js** by running
```
npm run build
```

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
or use webpack-dev-server (with hot module replacement enabled)
```
npm run devserver
```
