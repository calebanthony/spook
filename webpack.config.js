var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ["./assets/js/app.js", "./node_modules/bootstrap/scss/bootstrap.scss"],
    devtool: 'source-map',
    output: {
        filename: "assets/build/js/bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?sourceMap!sass-loader?sourceMap'
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('assets/build/css/bundle.css')
    ]
}
