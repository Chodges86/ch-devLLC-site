const express = require('express')
const cors = require('cors')
const controller = require('./controller')


const port = 4004
const app = express()

app.use(express.static(`${__dirname}/public`))

app.use(cors())
app.use(express.json())


app.get('/api/members', controller.getMembers)


app.listen(port, () => console.log(`App listening on port ${port}!`));