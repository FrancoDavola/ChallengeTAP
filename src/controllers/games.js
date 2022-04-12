const express = require('express')
const gameService = require('../services/gameService')
const Success = require('../handlers/successHandler')


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const getGame = async (req, res , next) =>  {
    try{
        const gameSelect =  await gameService.findAll(req.params.id)
        if(!gameSelect){
        res.json( new Success('Game not found'))
        }      
        res.json( new Success(gameSelect))
    
    }catch(err){
        next(err)
    }
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const createGame = async (req, res , next) => {

    try{
        const game = req.body  
        const gameCreate = await gameService.save(game);

        res.json(new Success(gameCreate))

    }catch(err){
        next(err)
    }
    
}

module.exports = {
    getGame,
    createGame,

}