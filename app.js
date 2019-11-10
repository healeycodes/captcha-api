/* app.js */

const captcha = require("./captcha");
const express = require("express");
const app = express();

// Human checkable test path, returns image for browser
app.get("/test/:width?/:height?/", (req, res) => {
  const width = parseInt(req.params.width) || 200;
  const height = parseInt(req.params.height) || 100;
  const { image } = captcha(width, height);
  res.send(`<img class="generated-captcha" src="${image}">`);
});

// Captcha generation, returns PNG data URL and validation text
app.get("/captcha/:width?/:height?/", (req, res) => {
  const width = parseInt(req.params.width) || 200;
  const height = parseInt(req.params.height) || 100;
  const { image, text } = captcha(width, height);
  res.send({ image, text });
});

module.exports = app;
