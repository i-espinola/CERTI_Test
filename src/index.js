// Requires modules
const http = require('http')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const extensoJs = require('./app/vendor/extenso')
const validation = require('./app/validation')

// Server configs
const setup = {
  path: 'public/',
  port: 3000,
  input: '/:input',
  method: 'GET',
  headers: {
    type: 'application/json'
  },
  banner: '\nExpress server on\n',
  error: {
    code: 400,
    status: 'Bad Request',
    details: 'enter a numeric value between -99999 to 99999'
  }
}

const app = express()
app.set('port', process.env.PORT || setup.port)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(setup.path)))

app.get(setup.input, (request, response) => {
  if (validation.default(request.params.input)) {
    response
      .status(200)
      .type(setup.headers.type)
      .json({
        // @ts-ignore
        extenso: extensoJs(request.params.input, ({ negative: 'informal' }))
      })
      .end()
  } else {
    response
      .status(400)
      .type(setup.headers.type)
      .json({ error: setup.error })
      .end()
  }
})

const server = http.createServer(app)
server.listen(app.get('port'), function () {
  console.log(setup.banner)
})
