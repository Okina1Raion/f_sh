`use strict`

const express = require('express')

const PORT = 4000
const HOSTNAME = '127.0.0.1'


let a = 0

const app = express()
app.get('/', (req, res) => {
    a += 1
    res.send(`Hello ${a}\n`)
})
app.get('/x', (req, res) => {
    a += 5
    res.send(`Hello ${a}\n`)
})

app.listen(PORT, HOSTNAME)

console.log(`Running on http://${HOSTNAME}:${PORT}`);