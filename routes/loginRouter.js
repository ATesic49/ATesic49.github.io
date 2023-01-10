const express =require('express')
const router = express.Router()


router.get('/',(req,res)=>{
    res.render('loginPage')
})

module.exports = router