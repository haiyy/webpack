const path=require("path");
module.exports={
    entry:"./src/main.js",
    output:{
        path:path.join(__dirname,"dist"),
        filename:"[name].js"
    }
}
/*1、安装webpack
2、创建webpack.config.js

const path = require("path");

module.exports = {
    entry:".c/app.js",
    output:{
        path:path.join(__dirname,"dist"),
        // filename:"bundle.js",
        filename:"[name].js",
    }
}
3、创建.babelrc
{
    "presets":["stage-2"]
}
4、package.json
scripts:{
    "dev"::"webpack --config webpack.config.js"
}
*/