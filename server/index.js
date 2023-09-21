const express = require('express')
const cors = require('cors')
const controller = require('./controller')


const PORT = 4004
const app = express()

app.use(cors())
app.use(express.json())


app.get('/api/members', controller.getMembers)


app.listen(PORT, () => console.log("Server running on port 4004"))