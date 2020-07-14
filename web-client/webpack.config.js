const path = require("path");

module.exports = {
    entry: path.join(__dirname, 'src/app.ts'),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,'build')
    },
    resolve: {
        extensions: [".ts"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                exclude: /node_modules/
            }
        ]
    }

}