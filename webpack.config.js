var webpack = require("webpack");
var path = require("path");
var DIST_DIR = path.resolve(__dirname, "dist"); //Transpilled src code
var SRC_DIR = path.resolve(__dirname, "src"); //Orginal code

var config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app"
    },
    module: {
        loaders: [{
            test: /\.js?/,
            include: SRC_DIR,
            loader: "babel-loader",
            query: {
                presets: [
                    "react",
                    "es2015",
                    "stage-2" //Destructuring
                ]
            }
        }]
    }
};


module.exports = config;
