const express = require('express')
const router = express.Router()
const Prodavnice=require('../models/Prodavnice')

router.get('/',checkAuthenticated,async (req,res)=>{
    const prodavnica = await Prodavnice.find({})
    let user = await req.user
    res.render('homePage',{user:user,prodavnica:prodavnica})
})

module.exports = router

function checkAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect('/login')
    } 