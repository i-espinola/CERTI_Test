// Requires modules
const express = require('express');
const bodyParser = require('body-parser');
const webService = require('./API-core/core');

// Server configs
const app = express();
const input = '/:input';
const port = process.env.PORT || 8000;

app.use(bodyParser.json());

app.get(input, (request, response) => {
  const output = request.params.input ? webService.startup(request.params.input) : null;
  response.send(output);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.info('Server on');
  return true;
});
