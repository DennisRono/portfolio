const express = require('express')
const app = express()
const options = require('./config/corsOptions')
const cors = require('cors')
const PORT = process.env.PORT || 5000
const logger = require('morgan')
const bodyParser = require('body-parser')
require('dotenv').config()

//middlewares
app.use(cors(options))
app.use(logger('combined'))
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.listen(PORT, console.log('Server running on Port ', PORT));