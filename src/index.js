/* eslint-disable no-console */
// Requires modules
const express = require('express');
const bodyParser = require('body-parser');

// Server configs
const config = {
  name: 'API Rest number to extenso',
  banner: 'Server on',
  input: '/:input',
  port: parseInt(process.env.PORT, 10) || 8000,
  host: process.env.HOST || 'localhost',
};

const app = express();
app.use(bodyParser.json());
app.get(config.input, (request, response) => {
  const output = request.params.input
    ? 'OK' // ? webService.startup(request.params.input)
    : null;
  response.status(200).send(output);
});

// @ts-ignore
app.listen(config.port, config.host, (e) => {
  if (e) {
    throw new Error('Internal Server Error');
  }
  console.info('server on ');
  console.info(`http://${config.host}:${config.port}`);
});
