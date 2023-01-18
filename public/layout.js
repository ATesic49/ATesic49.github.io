const podesavanja = document.querySelector('.podesavanja img')
const select = document.querySelector('.select')
const nijebody =document.querySelector('.nijebody')
const body= document.querySelector('body')
const user=document.querySelector('.user')

if (localStorage.getItem('user')==null){
    localStorage.setItem('user',user.innerText)
}
localStorage.getItem('user')



if (localStorage.getItem('mode')==null){
    localStorage.setItem('mode','darkmode')

}
let localData = localStorage.getItem('mode')


if(localData == 'whitemode'){
    body.style.setProperty('--background-color','#F9F7F5')
    body.style.setProperty('--skoro-background-color','rgb(222, 222, 222)')
    body.style.setProperty('--font-color','black')
    body.style.setProperty('--submit-color','#02be02')
    body.style.setProperty('--border-color','rgba(0, 0, 0, 0.413)')
    body.style.setProperty('--pogresna-lozinka','red')
    body.style.setProperty('--filteri','brightness(0)')
}else if(localData == 'darkpremium'){
    body.style.setProperty('--background-color','#7B7a7B')
    body.style.setProperty('--skoro-background-color','#707070')
    body.style.setProperty('--font-color','#aea327')
    body.style.setProperty('--submit-color','#5e5e5e')
    body.style.setProperty('--border-color','rgba(218, 218, 218, 0.413)')
    body.style.setProperty('--pogresna-lozinka','rgb(117, 33, 33)')
    body.style.setProperty('--filteri','invert(39%) sepia(5%) saturate(0%) hue-rotate(151deg) brightness(69%) contrast(90%)')
}else{
    body.style.setProperty('--skoro-background-color','rgb(70, 70, 70)')
    body.style.setProperty('--background-color','rgb(49, 49, 49)')
    body.style.setProperty('--font-color','#bababa')
    body.style.setProperty('--submit-color','#039f03f5')
    body.style.setProperty('--border-color','rgba(218, 218, 218, 0.413)')
    body.style.setProperty('--pogresna-lozinka','rgb(181, 32, 32)')
    body.style.setProperty('--filteri','invert(61%) sepia(84%) saturate(0%) hue-rotate(181deg) brightness(83%) contrast(97%)')
}


podesavanja.addEventListener('click',()=>{

    select.style.animation='meni 2s  ease forwards'
    select.style.display='flex'
    nijebody.style.display='block'
    })

nijebody.addEventListener('click',()=>{
    nijebody.style.display='none'
    select.style.animation='meni reverse 2s forwards '
        select.style.display='none'

})



const darkmode = document.querySelector('.Dark')
const whitemode = document.querySelector('.White')
const darkpremium = document.querySelector('.PremiumDark')

whitemode.addEventListener('click',()=>{
    localStorage.setItem('mode','whitemode')
    body.style.setProperty('--background-color','#f9f7f5')
    body.style.setProperty('--skoro-background-color','rgb(222, 222, 222)')
    body.style.setProperty('--font-color','black')
    body.style.setProperty('--submit-color','#02be02')
    body.style.setProperty('--border-color','rgba(0, 0, 0, 0.413)')
    body.style.setProperty('--pogresna-lozinka','red')
    body.style.setProperty('--filteri','brightness(0)')
})
darkmode.addEventListener('click',()=>{
    localStorage.setItem('mode','darkmode')
    body.style.setProperty('--skoro-background-color','rgb(70, 70, 70)')
    body.style.setProperty('--background-color','rgb(49, 49, 49)')
    body.style.setProperty('--font-color','#bababa')
    body.style.setProperty('--submit-color','#039f03f5')
    body.style.setProperty('--border-color','rgba(218, 218, 218, 0.413)')
    body.style.setProperty('--pogresna-lozinka','rgb(181, 32, 32)')
    body.style.setProperty('--filteri','invert(61%) sepia(84%) saturate(0%) hue-rotate(181deg) brightness(83%) contrast(97%)')
})
darkpremium.addEventListener('click',()=>{
    localStorage.setItem('mode','darkpremium')
    body.style.setProperty('--background-color','#7B7a7B')
    body.style.setProperty('--skoro-background-color','#black')
    body.style.setProperty('--font-color','#aea327')
    body.style.setProperty('--submit-color','#5e5e5e')
    body.style.setProperty('--border-color','rgba(218, 218, 218, 0.413)')
    body.style.setProperty('--pogresna-lozinka','rgb(117, 33, 33)')
    body.style.setProperty('--filteri','invert(39%) sepia(5%) saturate(0%) hue-rotate(151deg) brightness(69%) contrast(90%)')
})

