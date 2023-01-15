const express=require('express')
const router = express.Router()
const Prodavnice=require('../models/Prodavnice')




makeProdavnica()
getRoutes()






module.exports = router




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
async function getRoutes(){

    const prodavnice=await Prodavnice.find({})
    console.log(prodavnice)
    prodavnice.forEach(prodavnica=>{
        console.log(prodavnica.id)
        router.get(`/${prodavnica.id}`,(req,res)=>{
            res.render('meniPage',{prodavnica:prodavnica})
        })
    })
}
async function deleteProdavnicas(){
    await Prodavnice.deleteMany({})
}

