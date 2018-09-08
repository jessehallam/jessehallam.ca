const path = require('path');
const devMode = process.env.NODE_ENV === 'development'

module.exports = {
    entry: {
        main: path.join(__dirname, 'index')
    },

    mode: devMode ? 'development' : 'production',

    module: {
        rules: [
            {
                test: /\.tsx?/,
                loader: 'ts-loader'
            }
        ]
    },

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, '../../wwwroot/dist'),
        publicPath: 'dist/'
    },

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    }
}