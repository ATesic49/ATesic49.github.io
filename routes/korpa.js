const express=require('express')
const router = express.Router({mergeParams:true})
const User = require('../models/user')


router.get('/',async (req,res)=>{
    const userID = await req.session.passport.user
    const user = await User.findById(userID)
    res.render('korpa',{
        korpa:req.session.korpa,
        user:user})
    
    console.log(user,req.session.passport)
    })
router.post('/',async(req,res)=>{
    const redni=req.body.redni
   await req.session.korpa.splice(redni,1)
   console.log(req.session.korpa)

    const userID = await req.session.passport.user
    const user = await User.findById(userID)
    res.render('korpa',{
        korpa:req.session.korpa,
        user:user})
})




module.exports = router