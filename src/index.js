/**
 * Entry point for api
 * Creates http server
 * Listen on port  process.env.PORT || 5050
 */
const express = require('express')
const http = require('http')
const log = require('common/log')
const swaggerTools = require('swagger-tools')
const YAML = require('yamljs')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()

/**
 * Serve the Swagger documents and Swagger UI
 */
const swaggerDoc = YAML.load('src/swagger.yaml')
swaggerTools.initializeMiddleware(swaggerDoc, (middleware) => {
  app.use(middleware.swaggerUi())
})

app.use(bodyParser.json())

require('./routes')(app)

const port = process.env.PORT || 5050
http.createServer(app).listen(port, () => log.info(`Listen on ${port}`))
