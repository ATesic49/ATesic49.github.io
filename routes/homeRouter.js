const express = require('express')
const router = express.Router({mergeParams:true})
const Prodavnice=require('../models/Prodavnice')

router.get('/',checkAuthenticated,async (req,res)=>{
    if(req.session.korpa){
        console.log('ima korpa')
    }else{
        req.session.korpa=[]
    }
    const prodavnica = await Prodavnice.find({})
    req.params.user=await req.user
    let user = await req.user
    console.log(req.params.user,"PARAMS")
    res.locals.user =await user
    res.render('homePage',{user:user,prodavnica:prodavnica})
})

module.exports = router

function checkAuthenticated(req,res,next){
    if(req.isAuthenticated()){  
        return next()
    }
    res.redirect('/login')
    } 


    async function makeProdavnica(){

        if  (await(await Prodavnice.find({})).length ==0){  
            await Prodavnice.create({
                imeProdavnice:'Tebra Pitice',
                meni:[
                    {jelo:'Pita sa curetinom',cena:100}
                ],
                slika:'/imagesForSite/TebraPitice.jpeg'
            })
            
            await Prodavnice.create({
                imeProdavnice:'Hleb I Kifle',
                meni:[
                    {jelo:'Prazna Kifla',cena:5000},
                    {jelo:'Puna Kifla 5g',cena:95}
                ],
                slika:'/imagesForSite/hleb-kifle-1.jpg'
            })
            await Prodavnice.create({
                imeProdavnice:'Hot Good',
                meni:[
                    {jelo:'Biftek',cena:500},
                    {jelo:'Biftek Ludji',cena:605}
                ],
                slika:'/imagesForSite/hotGood.jpeg'
            })
            await Prodavnice.create({
                imeProdavnice:'Kefeterija',
                meni:[
                    {jelo:'Kafa',cena:5000},
                    {jelo:'Kafe Kafica',cena:115}
                ],
                slika:'/imagesForSite/Kafeterija-logo.jpg'
            })
        }
        
    }
    async function deleteProdavnicas(){
        await Prodavnice.deleteMany({})
    }