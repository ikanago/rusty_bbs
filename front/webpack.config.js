const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.tsx",

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "main.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template/index.html",
            scriptLoading: "defer",
        }),
    ],
    devServer: {
        contentBase: "./dist",
        historyApiFallback: true,
        inline: true,
        hot: true,
        port: 5000,
        open: true,
    },
};
