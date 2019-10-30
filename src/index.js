'use strict'

// IMPORTS
import http from 'http'
import path from 'path'
import express from 'express'
import favicon from 'serve-favicon'
import bodyParser from 'body-parser'
import WhiteExtenso from './app/core'

// Server instance and settings
const app = express()
const setup = {
  path: 'public/',
  port: process.env.PORT || 3000,
  input: '/:input',
  method: 'GET',
  headers: {
    type: 'application/json'
  },
  banner: '\nExpress server on\n',
  favicon: 'public/favicon.ico'
}

app.use(favicon(setup.favicon))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(setup.path)))
app.get(setup.input, (request, response) => {
  const extensoCore = new WhiteExtenso(request.params.input)
  const statusCode = extensoCore.validation() ? 200 : 400
  response
    .status(statusCode)
    .type(setup.headers.type)
    .json(extensoCore.start())
    .end()
})

// Start Serve
const server = http.createServer(app)
server.listen(setup.port, () => {
  console.log(setup.banner)
})
