const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/user", {
            target: "http://13.125.250.138:8080",
            changeOrigin: true,
        })
    );

    app.use(
        createProxyMiddleware("/auth", {
            target: "http://13.125.250.138:8080",
            changeOrigin: true,
        })
    );

    app.use(
        createProxyMiddleware("/keywords", {
            target: "http://13.125.250.138:8080",
            changeOrigin: true,
        })
    );

    app.use(
        createProxyMiddleware("/articles", {
            target: "http://54.66.54.30:5001",
            changeOrigin: true,
        })
    );

    app.use(
        createProxyMiddleware("/prototype", {
            target: "http://15.164.129.149:8000",
            changeOrigin: true,
        })
    );
};
