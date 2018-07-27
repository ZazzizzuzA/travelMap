const path = require("path"),
    webpack = require("webpack"),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, "src", "index.js"),
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "build"),
    },
    resolve: {
        extensions: [".js", ".json", ".scss", ".css"],
        alias: {
            fonts: path.join(__dirname, "assets", "fonts"),
        }
    },
    watch: true,
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: "file-loader"
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                options: {
                    limit: 8000,
                },
                loader: "url-loader"
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({ template: "./index.html" }),
        new CopyWebpackPlugin([{ from: 'assets/**/*' }])
    ]
}