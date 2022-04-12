const { v4: uuidv4 } = require('uuid');
const UserRepository = require('../repositories/gameRepository')
const {GAME} = require('../../constants')
const repository = new UserRepository()



const save = async (game) => {
    game.game.id = uuidv4()
    return await repository.save(game)
} 

const findById = async (id) => {
    return await repository.findById(id)
}

const findAll = async (id) => {

     if(!id){
         GAME.game.id = uuidv4()
        return await repository.save(GAME)
     }else { 
        return await repository.findById(id)
    
} 
}
module.exports = {
    findAll,
    findById,
    save,
}