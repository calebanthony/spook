var webpack = require('webpack');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // Tell Webpack where to start looking for your files.
    context: __dirname + "/assets",
    // We are looking at the Bootstrap files you installed with NPM.
    entry: [
        "./js/app.js",
        "./scss/app.scss"
    ],
    // This next line generates source maps to help with debugging.
    // Don't want source maps? Get rid of it.
    devtool: 'source-map',
    // Here we're defining the output of our bundled JS.
    output: {
        filename: "../js/bundle.js",
        // Everything gets initially output to this directory.
        // /js and /fonts are odd because of how Font Awesome builds.
        path: __dirname + "/assets/build/css"
    },
    // This is the extra rules that we have to handle our SCSS and ES2015.
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                // babel-loader brings in all that ES2015 goodness.
                use: ['babel-loader']
            },
            {
                test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: ['file-loader?name=../fonts/[name].[ext]']
            }
        ]
    },
    plugins: [
        // This plugin lets us pull out our CSS into its own file.
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        }),
        // To remove jQuery altogether, simply comment out this plugin.
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ]
}
