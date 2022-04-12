const {check} = require('express-validator')
const {validationResult} = require('../commons')
const {DESCRIPTION , CODE} = require('../../../constants/')
const AppError = require('../../errors/appError')
const gameService = require('../../services/gameService')


const _description = check('game.state.description').optional().custom(
    async (description = '') => {
        if(!DESCRIPTION.includes(description)){
            throw new AppError('invalid description' , 400)
        }
    }
)



const _code = check('game.state.code').optional().custom(
    async (code = '') => {
        if(!CODE.includes(code)){
            throw new AppError('invalid code' , 400)
        }
    }
)

const postRequestValidations = [
    _description,
    _code,
    validationResult
]



module.exports = {
    postRequestValidations
}