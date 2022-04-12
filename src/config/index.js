const dotenv = require('dotenv')

const envFound = dotenv.config()
if(!envFound) {
    throw new Error('No se encontro el .env')
}

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
    port : process.env.PORT,
    log : process.env.LOG_LEVEL,
    dataBaseURL : process.env.DATABASE_URL
}