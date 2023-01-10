const express =require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const UserSchema = require('../models/user')

router.get('/',checkNotAuthenticated,(req,res)=>{
    res.render('registerPage',{error:''})
})


router.post('/',checkNotAuthenticated,async (req,res)=>{
const hashedPassword =await bcrypt.hash(req.body.password,10)
const brojTelefona = await req.body.brojtelefona.replace('+381','0')
try{
    const user =  new UserSchema({
        imePrezime:req.body.imeiprezime,
        brojTelefona:brojTelefona,
        password:hashedPassword
    })
    if(await UserSchema.find({brojTelefona:user.brojTelefona,password:user.password})){
         res.render('registerPage',{error:"Brate, ti vec imas nalog"})
    }else{
    const newUser = await user.save()
    console.log(newUser)
}
}catch (e){
    console.log(e.message)
}

})


module.exports = router
router.use(express.static('public'))    


function checkNotAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        res.redirect('/')
    }
    return next()
}