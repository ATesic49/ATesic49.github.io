const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

function initialize(passport,getUserBybrojtelefona,getUserById){
const authenticateUser =async (brojtelefona,password,done)=>{
    brojtelefona = await brojtelefona.replace('+381','0')
        const user =await getUserBybrojtelefona(brojtelefona)
if(user == null){
    return done(null,false,{message:'Ovaj broj telefona nije u bazi podataka'})
}
if(await bcrypt.compare(password,user.password)){
    return done(null,user)
}else{
    return done(null,false,{message:'Pogresna lozinka'})
}
}
    passport.use(new LocalStrategy({
        usernameField:'brojtelefona'
    },authenticateUser))
passport.serializeUser((user,done)=>{done(null,user.id)})
passport.deserializeUser((id,done)=>{done(null,getUserById(id))})
}

module.exports = initialize