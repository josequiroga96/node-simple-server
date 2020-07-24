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
app.post('/success', cors(corsOptions), (req, res) => {
	console.log("Sending success response!!");
	setTimeout(() => res.status(201).send('Success!'), 2000);
})
app.post('/error', cors(corsOptions), (req, res) => {
	console.log("Sending error response!!");
	setTimeout(() => res.status(400).send('Error!'), 2000);
})
app.post('/conflict', cors(corsOptions), (req, res) => {
	console.log("Sending conflict response!!");
	setTimeout(() => res.status(422).send({errors: {email: "has already been taken"}}), 2000);
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))