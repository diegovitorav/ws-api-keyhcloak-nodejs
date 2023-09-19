require("dotenv").config();
const express = require("express");
const app = express();
const session = require("express-session");

var SERVICE_PORT = process.env.SERVICE_PORT || 3000;

var memoryStore = new session.MemoryStore();
app.use(
  session({
    secret: "nodejs-microsservice",
    resave: false,
    saveUninitialized: true,
    store: memoryStore,
  })
);

const keycloak = require("./config/keycloak-config").initKeycloak(memoryStore);

app.use(keycloak.middleware());

let testController = require("./controller/test-controller.js");
app.use("/test", testController);

app.get("/", function (req, res) {
  res.send("Server is up!");
});

app.listen(SERVICE_PORT);

// var express = require('express');
// var app = express();
// var stringReplace = require('string-replace-middleware');

// var KC_URL = process.env.KC_URL || "http://localhost:8080/auth";
// var SERVICE_URL = process.env.SERVICE_URL || "http://localhost:3000/secured";

// app.use(stringReplace({
//    'SERVICE_URL': SERVICE_URL,
//    'KC_URL': KC_URL
// }));
// app.use(express.static('.'))

// app.get('/', function(req, res) {
//     res.render('index.html');
// });

// app.listen(8000);
