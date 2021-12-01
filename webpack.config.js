const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    mode: "development",
    module: {
        rules: [{
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.(ts|tsx)$/,
                use: [
                    'babel-loader',
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html",
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "public"),
        },
        compress: true,
        host: "localhost",
        port: 3000,
        hot: true
    },
};