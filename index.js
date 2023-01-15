if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
   }


const express = require('express')
const app = express()
const methodOverride = require('method-override')
const path = require('path')
const ejsLayouts=require('express-ejs-layouts')
const UserSchema = require('./models/user')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')


//MONGOOSE
const mongoose = require('mongoose')
const user = require('./models/user')
mongoose.set('strictQuery',false)
mongoose.connect(process.env.DATABASE_URL,()=>{
    console.log('Mongoose connected! :)')
})

//PASSPORT
const initializePassport = require('./passport-config')
initializePassport(passport,getUserBybrojtelefona,getUserById)






    app.use(express.urlencoded({ extended: false }))
    app.set('view engine', 'ejs')
    app.use(ejsLayouts)
    app.set('layout', 'layouts/layout.ejs')
    app.use(flash())
    app.use(session({
        secret:process.env.SESSION_SECRET,
        resave:false,
        saveUninitialized:false
    }))
    app.use(passport.initialize())
    app.use(passport.session())
    app.use(methodOverride('_method'))





// ROUTES
const registerRouter = require('./routes/registerRouter')
const loginRouter = require('./routes/loginRouter')
const homeRouter =require('./routes/homeRouter')
const logoutRouter = require('./routes/logoutPage')
const prodavniceRouter = require('./routes/prodavniceRouter')
    app.use('/register', registerRouter)
    app.use('/login', loginRouter)
    app.use('/',homeRouter)
    app.use('/logout',logoutRouter)
    app.use('/',prodavniceRouter)


    app.listen(process.env.PORT || 3000)
    app.use(express.static('public'))

getUserBybrojtelefona('06644737375')


async function getUserBybrojtelefona(brojtelefona){
const user = await UserSchema.findOne({brojTelefona:brojtelefona})

return user
}
async function getUserById(id){
    const user = await UserSchema.findById(id)

    return user
    }

