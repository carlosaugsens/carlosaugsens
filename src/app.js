const express = require('express')
const {resolve} = require('path')

const homeRoutes = require('./routes/homeRoutes')

require('./database')


class App {
    constructor(){
        this.app = express()
        this.middlewares()
        this.routes()
        this.views()
    }
    
    middlewares(){
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: true}))
    }

    routes(){
        this.app.use('/', homeRoutes)    
    }

    views(){
        this.app.set('views', resolve(__dirname, 'views'))
        this.app.set('view engine', 'ejs')
    }

}

module.exports = new App().app