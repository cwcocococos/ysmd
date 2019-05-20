module.exports = {
    devServer:{
        open:true,
        port:"8090", //设置端口号
        proxy:{
            "/yang":{
                target:"http://127.0.0.1",
                changeOrigin:true,
                pathRewrite:{
                    "^/yang":""
                }
            }
        }
    }
}