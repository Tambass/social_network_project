// Import dependencies

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const http = require("http");
const container = require("./container");
const { Router } = require("express");

container.resolve(function (users) {
  const app = SetupExpress();

  function SetupExpress() {
    const app = express();
    const server = http.createServer(app);
    server.listen(3000, function () {
      console.log("Écoute le port 3000");
    });
  }

  //Setup router
  const router = require("express-promise-router")();
  users.SetRouting(router);

  app.use(router);
});
