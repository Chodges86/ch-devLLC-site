const db = require('./db.json')

module.exports = {
    getMembers(req, res) {
        res.status(200).send(db)
    }
}