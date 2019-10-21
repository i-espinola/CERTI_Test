// Requires modules
const express = require('express');
const bodyParser = require('body-parser');
const extenso = require('./commonjs/white');
const app = express();
const server = {
  settings: {
    banner: 'settings on',
    input: '/:input',
    port: parseInt(process.env.PORT, 10) || 8000,
    host: process.env.HOST || 'localhost',
  },
  error: {
    code: 400,
    status: 'Número/valor inválido',
    details: 'entre com um valor numérico entre -99999 até 99999'
  },
  apiRun: function(input) {
    // extenso(input, { negative: 'informal' })
    return extenso(input)
  }
};

app.use(bodyParser.json());
app.get(server.settings.input, (request, response) => {
  const output = isNaN(Number.parseInt(request.params.input))
    ? server.error
    : server.apiRun(request.params.input)
  response.status(200).send(output);
});

app.listen(server.settings.port, server.settings.host, function()
{
  console.info('settings on ');
  console.info(`http://${server.settings.host}:${server.settings.port}`);
});
