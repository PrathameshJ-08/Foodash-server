const express = require("express");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.use(
  "/swiggy-api",
  createProxyMiddleware({
    target: "https://www.swiggy.com",
    changeOrigin: true,
    pathRewrite: {
      "^/swiggy-api": "/dapi/restaurants/list/v5",
    },
    onError: (err, req, res) => {
      console.error("Proxy Error:", err);
      res.status(500).send("Proxy Error");
    },
    onProxyReq: (proxyReq) => {
      proxyReq.setHeader("Content-Type", "application/json");
      proxyReq.setHeader("Access-Control-Allow-Origin", "*");
      proxyReq.setHeader(
        "User-Agent",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
      );
    },
  })
);

app.use(
  "/api/menu",
  createProxyMiddleware({
    target: "https://www.swiggy.com",
    changeOrigin: true,
    pathRewrite: {
      "^/api/menu": "/dapi/menu/pl",
    },
    onProxyReq: (proxyReq) => {
      proxyReq.setHeader("Content-Type", "application/json");
      proxyReq.setHeader("Access-Control-Allow-Origin", "*");
      proxyReq.setHeader(
        "User-Agent",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
      );
    },
  })
);

app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
