 const { type } = require('express/lib/response');
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema


const gameSchema = new Schema({ 
  game: {
    id : {type : String , index : true},
    created : {type : Date , default : Date.now},
    state : {
      code : {type : Number , default : 1 , enum : [ 1 , 2 , 3]},
      description : {type : String , default : 'CREATED' , enum : ['CREATED' , 'WON' , 'LOST']}
    }
  },
  cells : {
    type : Array,
  },
},

    );

gameSchema.plugin(uniqueValidator, {message : 'exist in the DB'})

module.exports = mongoose.model('game' , gameSchema) 