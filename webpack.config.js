var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './app/scripts/src/main.js',
    output: {
        path: __dirname,
        filename: './app/scripts/dist/bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: path.join(__dirname, 'app/scripts/src/'),
                query: {
                  presets: 'es2015',
                },
            }
        ]
    },
    plugins: [
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        colors: true
    },
    devtool: 'source-map',
};
