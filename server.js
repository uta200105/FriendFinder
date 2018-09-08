var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

app.use(express.static(path.join(__dirname + "/api/public")));

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/htmlRoutes")(app)
require("./app/routing/apiRoutes")(app)



app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });