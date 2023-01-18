const { application } = require('express')
const express=require('express')
const router = express.Router({mergeParams:true})
const Prodavnice=require('../models/Prodavnice')
const User = require('../models/user')

makeProdavnica()
getRoutes()
// deleteProdavnicas()





module.exports = router




async function makeProdavnica(){

    if  (await(await Prodavnice.find({})).length ==0){  
        await Prodavnice.create({
            imeProdavnice:'Tebra Pitice',
            meni:[
                {segment:'Pite',jela:[
                {jelo:'Sir',cena:85},
                {jelo:'Meso',cena:89},
                {jelo:'Kulen-zdenka',cena:95},
                {jelo:'Pecenica Pavlaka',cena:95},
                {jelo:'Dimljena mangulica',cena:99},
                {jelo:'Kobasica od divljaci',cena:99},
                {jelo:'Piletina-pavlaka',cena:99},
                {jelo:'Sir-zelje',cena:85},
                {jelo:'Praziluk-sir',cena:85},
                {jelo:'Virsla u Piti',cena:90},
                {jelo:'Sunka Kackavalj',cena:95},
                {jelo:'Kolenica-Ren',cena:99},
                {jelo:'Curetina u gorgonzoli',cena:99},
                {jelo:'Pecurka',cena:80},
                {jelo:'Jabuka',cena:80},
                {jelo:'Visnja',cena:80},
                {jelo:'Kajsija',cena:80},
                {jelo:'Sljiva',cena:80},
                {jelo:'Bundeva',cena:80}
            ]},
            {segment:'Kiflice',jela:[
                {jelo:'Sir',cena:85},
                {jelo:'Prsuta-Maslina',cena:55},
                {jelo:'Sunka-Kackavalj',cena:49},
                {jelo:'Masline-Origano',cena:45},
                {jelo:'Kajsija',cena:55},
                {jelo:'Malina',cena:55},
                {jelo:'Visnja',cena:49},
                {jelo:'Orah',cena:49},
                {jelo:'Vanila',cena:49},
                {jelo:'Nutella',cena:49},

            ]},
            {segment:'Baklave',jela:[
                {jelo:'Orah',cena:200},
                {jelo:'Suva sljiva-orah',cena:200},
                {jelo:'Pistaci',cena:200},
                {jelo:'Smokva-Orah',cena:200},
                {jelo:'Nutella-plazma',cena:200},
                {jelo:'Mak',cena:200},
                {jelo:'Kokos-Nutella',cena:200},

            ]},
            {segment:'Urmasice',jela:[
                {jelo:'Orasi',cena:120},
                {jelo:'Kokos-Badem',cena:120},

            ]},
            {segment:'Tulumbe',jela:[
                {jelo:'2 Tulumbe',cena:120},
            


            ]}

            ],
            slika:'/imagesForSite/TebraPitice.jpeg'
        })
        await Prodavnice.create({
            imeProdavnice:'Kafeterija',
            meni:[
                {segment:'Kafa',jela:[
                    {jelo:'Espresso',cena:225,specijal:[{ime:'Selection',vrednost:0.95},{ime:'Blend',vrednost:.9},{ime:'Grand',vrednost:1}]},
                    {jelo:'Dupli Espresso',cena:305,specijal:[{ime:'Selection',vrednost:0.95},{ime:'Blend',vrednost:.9},{ime:'Grand',vrednost:1}]},
                    {jelo:'Produzeni Eprresso',cena:225,specijal:[{ime:'Selection',vrednost:0.95},{ime:'Blend',vrednost:.9},{ime:'Grand',vrednost:1}]},
                    {jelo:'Makijato',cena:245,specijal:[{ime:'Selection',vrednost:0.95},{ime:'Blend',vrednost:.9},{ime:'Grand',vrednost:1}]},
                    {jelo:'Kapucino',cena:275,specijal:[{ime:'Selection',vrednost:0.95},{ime:'Blend',vrednost:.9},{ime:'Grand',vrednost:1}]},
                    {jelo:'Kapucino XL',cena:345,specijal:[{ime:'Selection',vrednost:0.95},{ime:'Blend',vrednost:.9},{ime:'Grand',vrednost:1}]},
                    {jelo:'Amerikano',cena:345,specijal:[{ime:'Selection',vrednost:0.95},{ime:'Blend',vrednost:.9},{ime:'Grand',vrednost:1}]},
                    {jelo:'Kafa late',cena:285,specijal:[{ime:'Selection',vrednost:0.95},{ime:'Blend',vrednost:.9},{ime:'Grand',vrednost:1}]},
                    {jelo:'Late makijato',cena:305,specijal:[{ime:'Selection',vrednost:0.95},{ime:'Blend',vrednost:.9},{ime:'Grand',vrednost:1}]},
                    {jelo:'Moka',cena:345,specijal:[{ime:'Selection',vrednost:0.95},{ime:'Blend',vrednost:.9},{ime:'Grand',vrednost:1}]},
                    {jelo:'Moka XL',cena:395,specijal:[{ime:'Selection',vrednost:0.95},{ime:'Blend',vrednost:.9},{ime:'Grand',vrednost:1}]},
                ]},
                {segment:'Hladna Kafa',jela:[
                    {jelo:'Hladni espresso',cena:315,specijal:[{ime:'Selection',vrednost:0.95},{ime:'Blend',vrednost:.9},{ime:'Grand',vrednost:1}]},
                    {jelo:'Ledena kafa',cena:335,specijal:[{ime:'Selection',vrednost:0.95},{ime:'Blend',vrednost:.9},{ime:'Grand',vrednost:1}]},
                    {jelo:'Ledena moka',cena:355,specijal:[{ime:'Selection',vrednost:0.95},{ime:'Blend',vrednost:.9},{ime:'Grand',vrednost:1}]},

                ]},
                {segment:'Topla Cokolada',jela:[
                    {jelo:'Klasik',cena:345},
                    {jelo:'Lesnik',cena:345},
                ]},
                {segment:'Afogato',jela:[
                    {jelo:'Afogato',cena:285}
                ]},
                {segment:'Cold Brew',jela:[
                    {jelo:'Klasik',cena:345},
                    {jelo:'Hladna-matcha',cena:355}
                ]},
                {segment:'Čaj',jela:[
                    {jelo:'Godzi bobice i jagoda',cena:275},
                    {jelo:'Nana i moringa',cena:275},
                    {jelo:'Beli čaj',cena:275},
                    {jelo:'Mača zeleni čaj',cena:275},
                ]},
                {segment:'Domaći ledeni čaj',jela:[
                    {jelo:'Marakuja',cena:295},
                    {jelo:'Borovnica',cena:295},
                    {jelo:'Breskva',cena:295},
                    {jelo:'Malina',cena:295}
                ]},
                {segment:'Gusti sok',jela:[
                    {jelo:'Jabuka',cena:285},
                    {jelo:'Kajsija',cena:285},
                    {jelo:'Jagoda',cena:285},
                    {jelo:'Malina',cena:285},
                ]},
                {segment:'dorucak',jela:[
                    {jelo:'Kroasan',cena:155},
                    {jelo:'Kroasan sunka i sir',cena:255},
                    {jelo:'Kroasan malina',cena:225},
                    {jelo:'Nutella i badem',cena:245},
                    {jelo:'Kranč kikiriki i banana',cena:355},
                    {jelo:'Kranč borovnica i čila',cena:375},
                ]},
                {segment:'Mafin',jela:[
                    {jelo:"Čokolada",cena:195},
                    {jelo:"Šumsko voće",cena:195},
                    {jelo:"Jafa",cena:195},
                ]},
                {segment:'Kolači',jela:[
                    {jelo:'Jabuka tart',cena:345},
                    {jelo:'Čokoladni biskvit',cena:165},
                    {jelo:'Beli čokoladni biskvit',cena:185},
                ]}
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
        router.get(`/${prodavnica.id}/`,async (req,res)=>{
            if(await req.session){
                console.log(await req.session)
                const userID = await req.session.passport.user
                const user = await User.findById(userID)
                console.log(user,'URAAAA!')
                res.render('meniPage',{prodavnica:prodavnica,user:user})
            }else{
                res.redirect('/login')
            }
           
        })
    })
}
async function deleteProdavnicas(){
    await Prodavnice.deleteMany({})
}

