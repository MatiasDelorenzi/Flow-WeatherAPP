const express = require('express')
const morgan = require('morgan')
const app = express()

//SETTINGS
app.set('port', process.env.PORT || 3000)
app.set('json spaces', 2)

//MIDDLEWARES
app.use(morgan('dev'))
app.use(express.urlencoded({ extended:false }))
app.use(express.json())

//ROUTES
app.use('/v1', require('./routes/index'))

//INITIALIZATION
app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`)
})

