const mongoose = require('mongoose')

const ProdavniceShema = new mongoose.Schema({
    imeProdavnice:{
    },
    meni:{

    },
    slika:{
    }

})

module.exports =mongoose.model('Prodavnice',ProdavniceShema)