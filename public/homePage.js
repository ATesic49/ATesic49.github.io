const prodavnice = document.querySelectorAll('.prodavnica')
const updateUser=document.querySelector('.update-user')


const pretraga = document.querySelector('.drugi input')
pretraga.addEventListener('input',()=>{

let i = 0
const search = pretraga.value
prodavnice.forEach((prodavnica)=>{
if(prodavnica.querySelector('h2').innerText.toLowerCase().includes(search.toLowerCase())){
    prodavnica.style.display='flex'
}else{
    prodavnica.style.display='none'
    return    i++

}
})
if(i === prodavnice.length){
    prodavnice.forEach(prodavnica=>{
        prodavnica.style.display = 'flex'

    })
}
})



user.addEventListener('click',()=>{

    updateUser.style.animation='meni 2s  ease forwards'
    updateUser.style.display='flex'
    nijebody.style.display='block'
    })

nijebody.addEventListener('click',()=>{
    nijebody.style.display='none'
    updateUser.style.animation='meni reverse 2s forwards '
    updateUser.style.display='none'

})



