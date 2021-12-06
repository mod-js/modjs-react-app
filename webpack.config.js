const path = require("path");
const MiniCssExtract = require('mini-css-extract-plugin')

module.exports = {
    // Where to save files once bundled with webpack
    output: {
        path: path.join(__dirname, '/dist'), //Using path library join current path and '/dist'
        filename: 'index.bundle.js', // Bundled output filename
    },
    // Development server
    devServer: {
        port: 3010, // Set port number
        // watchContentBase: true, //File changes will trigger a full page reload *Webpack 5 deprecated, enabled default
    },
    // Compile into a browser ready bundle
    module: {
        rules: [
            // Find JS and pass to babel-loader
            {
                test: /\.(js|jsx)$/, // Regex - match *.js|*.jsx
                exclude: /node_modules/, // Exclude node modules from loader
                use: { //When files found pass via babel loader
                    loader: 'babel-loader'
                }
            },
            // Find Sass files and pass to sass-loader
            {

                test: /\.scss$/, // Regex - match *.scss
                use: [
                    //'style-loader', //Inserts styles within style tag of head
                    MiniCssExtract.loader, // seperate css file
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [new MiniCssExtract()],
};