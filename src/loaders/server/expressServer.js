const express = require('express')
const morgan = require('morgan')
const config = require('../../config')
const logger = require('../logger')


class ExpressServer {
    
    constructor (){

        this.app = express()
        this.port = config.port
        this._middlewares()
        this._routes()
        this._notFound()
        this._errorHandler()

    }

    _middlewares(){
        this.app.use(express.json())
        this.app.use(morgan('tiny'))
    }

    _routes() {

        this.app.head('/status' , (req, res) => {
            res.status(200).end()
        })

        this.app.use(`/game`, require('../../routes/games'))
    }

    _notFound() {
        this.app.use((req, res, next) => {
            const err = new Error('Not Found')
            err.code = 404
            next(err)
        })
    }

    _errorHandler() {
        this.app.use((err , req, res , next) => {
            const code = err.code || 500

            logger.error(`${code} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`)
            logger.error(err.stack)

            res.status(code)
            const body = {
                error: {
                    message: err.message,
                    code
                }
            }
            res.json(body)
        })
    }


    async start() {
        this.app.listen(this.port , (error) => {
            if(error) {
                logger.error(err)
                process.exit(1)
                return
            }
        })
    }
}

module.exports = ExpressServer