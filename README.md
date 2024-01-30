# 💻 Swiggy API Proxy

A Node.js application is set up to act as a proxy for Swiggy API requests. The application utilizes Express, a popular web application framework for Node.js.

---

# 📔 Features

## http-proxy-middleware

The `http-proxy-middleware` library is used to create a proxy server in the Node.js application. This middleware simplifies the process of setting up a proxy server to forward requests to the Swiggy API.

## Fetch Restaurant Lists and Menus

The proxy is configured to fetch data from Swiggy API endpoints responsible for retrieving restaurant lists and menus.

## CORS Implementation

Cross-Origin Resource Sharing (CORS) is implemented to allow cross-origin requests. This is essential when making requests from a client-side application to a server that is on a different domain.

## Configurable Proxy Settings

The proxy server has configurable settings, allowing flexibility for different Swiggy API endpoints. This might include specifying different endpoints or adjusting other proxy-related configurations.

## Integration with Foodash

The proxy server is integrated with a client application named "Foodash," which is hosted at [🥗 Foodash](https://Foodash.vercel.app/) and has its repository available on GitHub ([repository](https://github.com/PrathameshJ-08/Foodash)).

---
