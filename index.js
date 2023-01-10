if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
   }


const express = require('express')
const app = express()
const registerRouter = require('./routes/registerRouter')
const loginRouter = require('./routes/loginRouter')
const path = require('path')
const ejsLayouts=require('express-ejs-layouts')



//MONGOOSE
const mongoose = require('mongoose')
mongoose.set('strictQuery',false)
mongoose.connect(process.env.DATABASE_URL,()=>{
    console.log('Mongoose connected! :)')
})






app.use(express.urlencoded({extended:false}))
app.set('view engine','ejs')
app.use(ejsLayouts)
app.set('layout','layouts/layout.ejs')
app.use('/register',registerRouter)
app.use('/login',loginRouter)





app.listen(process.env.PORT || 3000)
app.use(express.static('public'));
