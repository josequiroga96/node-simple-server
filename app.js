const express = require('express')
var cors = require('cors')
const app = express()
const port = 8080

var corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
}

app.get('/', cors(corsOptions), (req, res) => res.send('Hello World!'))
app.post('/success', cors(corsOptions), (req, res) => res.status(201).send('Success!'))
app.post('/error', cors(corsOptions), (req, res) => res.status(400).send('Error!'))
app.post('/conflict', cors(corsOptions), (req, res) => res.status(422).send({errors: {email: "has already been taken"}}))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))