const express = require('express')
const app = express()
const options = require('./config/corsOptions')
const cors = require('cors')
const PORT = process.env.PORT || 5000
const logger = require('morgan')
const bodyParser = require('body-parser')
require('dotenv').config()
const fs = require('fs')

//routes
const authRoute = require('./routes/auth')

//middlewares
app.use(cors(options))
app.use(cors({
    exposedHeaders: ['authToken', 'refreshToken'],
}));
morgan.token('date', (req, res, tz) => {
    return moment().tz(tz).format('YYYY-MM-DD HH:mm:ss');
})
app.use(logger('combined', {
    stream: fs.createWriteStream('./access.log', {flags: 'a'})
}));
//app.use(logger('dev'))
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.use('/', authRoute)

app.listen(PORT, console.log('Server running on Port ', PORT));