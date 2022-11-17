const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')

require('dotenv').config()
require('./config/database')

app.use(cors())
app.use(express.json())

// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/', require('./routes/cars'))
app.use('/', require('./routes/users'))

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(4000, () => {
    console.log('App listening on port 4000!')
})
