const Game = require('../models/game') 

class GameRepository {

    constructor() {

    }

    async findById(id) {    
        return await Game.findOne({'game.id' : id})
    }

    async save(game) {
        return await Game.create(game)
    }
}

module.exports = GameRepository