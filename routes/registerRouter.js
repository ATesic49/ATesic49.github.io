const express =require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const UserSchema = require('../models/user')

router.get('/',(req,res)=>{
    res.render('registerPage')
})


router.post('/',async (req,res)=>{
const hashedPassword =await bcrypt.hash(req.body.password,10)
const brojTelefona = await req.body.brojtelefona.replace('+381','06')
const user =  new UserSchema({
    imePrezime:req.body.imeiprezime,
    brojTelefona:brojTelefona,
    password:hashedPassword
})
const newUser = await user.save()
console.log(newUser)
})


module.exports = router
router.use(express.static('public'))    
