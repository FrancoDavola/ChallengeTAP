 const mongoose = require('mongoose')
const config = require('../../config')


 module.exports =  async () => {
    await mongoose.connect(config.dataBaseURL)
 }  