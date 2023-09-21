const express = require('express')
const cors = require('cors')
const controller = require('./controller')


const port = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(express.json())


app.get('/api/members', controller.getMembers)


app.listen(port, () => console.log(`App listening on port ${port}!`));