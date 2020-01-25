const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = app => {
    // app.use(bodyParser)
    app.use(cors({
        origin: '*'
    }))
    app.use(bodyParser.json()); 
    app.use(bodyParser.urlencoded({extended: true }))
}