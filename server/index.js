const express = require('express')
const cors = require('cors')
const controller = require('./controller')


const port = 4004
const app = express()

console.log("1")
app.use(cors())
// app.use(express.static(`${__dirname}/public`))
console.log("2")
app.use(express.json())

console.log("3")
app.get('/api/members', controller.getMembers)

console.log("4")

app.listen(port, () => console.log(`App listening on port ${port}!`));