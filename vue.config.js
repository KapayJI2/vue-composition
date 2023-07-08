module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/dev/",
  productionSourceMap: false,
  assetsDir: "assets",
  devServer: {
    disableHostCheck: true,
    host: "localhost",
    port: 8080,
  },
};
