const express = require('express')
const router = express.Router()

router.get('/',checkAuthenticated,async (req,res)=>{
    let imePrezime = await req.user
    res.render('homePage',{imePrezime:imePrezime.imePrezime})
})

module.exports = router

function checkAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect('/login')
    } 