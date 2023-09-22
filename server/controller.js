const db = require('./db.json')

module.exports = {
    getMembers(req, res) {
        console.log("sending", db)
        res.status(200).send(db)
    }
}