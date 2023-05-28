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
    createProxyMiddleware("/keywords", {
      target: "http://54.180.152.95:8080",
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware("/get", {
      target: "http://13.125.56.155:5001",
      changeOrigin: true,
    })
  );
};
