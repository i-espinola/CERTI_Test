// Requires modules
const env = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const webService = require("./API-core/core");

// Server configs
const app = express();
const input = "/";
const port = process.env.PORT || 8000;

app.use(bodyParser.json());

app.get(input, (request, response) => {
  const output = request.params.input ?
    webService.startup(request.params.input) :
    null;

  response.send(output);
});

app.listen(port, () => {
  console.log('Server on');
  return true;
})
