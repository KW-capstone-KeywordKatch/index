const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/user", {
      target: "http://54.180.152.95:8080",
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware("/auth", {
      target: "http://54.180.152.95:8080",
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware("/prototype", {
      target: "http://13.209.7.194:8000",
      changeOrigin: true,
    })
  );
};
