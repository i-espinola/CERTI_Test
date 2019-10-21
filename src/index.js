// Requires modules
import express from 'express';
import { json } from 'body-parser';
import extenso from './commonjs/white';
const app = express();
const server = {
  settings: {
    banner: '\nServer up\n',
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

app.use(json());
app.get(server.settings.input, (request, response) => {
  const output = isNaN(Number.parseInt(request.params.input))
    ? server.error
    : server.apiRun(request.params.input);
  response.status(200).send(output);
});

app.listen(server.settings.port, server.settings.host, function()
{
  console.info(`${server.settings.banner}`);
  console.info(`http://${server.settings.host}:${server.settings.port}`);
});
