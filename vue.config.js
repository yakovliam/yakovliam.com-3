module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/yakovliam.com/" : "/",
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Yakovliam (Jacob C)";
                return args;
            })
    }
}