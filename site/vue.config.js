module.exports = {
    devServer:{
        open:true,
        port:"8090", //设置端口号
        host:"127.0.0.1",  //域名
        proxy:{
            "/api":{
                target:"http://127.0.0.1",
                changeOrigin:true,
                pathRewrite:{
                    "^/api":""
                }
            }
        }
    }
}