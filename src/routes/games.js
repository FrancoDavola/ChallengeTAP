const {Router} = require('express')
const router = Router()
const {getGame , createGame} = require('../controllers/games')
const {postRequestValidations} = require('../middlewares/games')

router.get('/:id?', getGame)

router.post('/',postRequestValidations , createGame)



module.exports = router