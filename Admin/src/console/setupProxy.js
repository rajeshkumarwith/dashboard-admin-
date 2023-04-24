const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/gsi',
    createProxyMiddleware({
      target: 'https://accounts.google.com',
      changeOrigin: true,
      pathRewrite: {
        '^/gsi': '/gsi/client',
      },
    })
  );
};
