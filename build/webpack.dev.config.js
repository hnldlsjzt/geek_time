module.exports = {
  devtool: "eval-cheap-module-source-map",
  devServer: {
    port: 8089,
    hot: true,
    host: "localhost",
  },
  target: "web",
  mode: "development",
};
