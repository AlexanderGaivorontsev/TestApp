const express = require('express')
require('dotenv').config();
const app = express()
var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.send({ msg: 'Hello World!'})
})

const port = process.env.PORT || 3500

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
