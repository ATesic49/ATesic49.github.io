const express =require('express')
const passport = require('passport')
const router = express.Router()


router.get('/',checkNotAuthenticated,(req,res)=>{
    res.render('loginPage')
})


router.post('/',checkNotAuthenticated,passport.authenticate('local',{
    successRedirect:'/',
    failureRedirect:'/login',
    failureFlash:true
}))

module.exports = router

function checkNotAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        res.redirect('/')
    }
    return next()
}