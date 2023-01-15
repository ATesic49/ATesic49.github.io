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
    console.log(await UserSchema.find({brojTelefona:user.brojTelefona}))
    if(await (await UserSchema.find({brojTelefona:user.brojTelefona})).length == 0){
        const newUser = await user.save()
        console.log(newUser)
        res.redirect('/login')
    }else{

    res.render('registerPage',{error:"Brate, ti vec imas nalog"})


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