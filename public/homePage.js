const prodavnice = document.querySelectorAll('.prodavnica')

const pretraga = document.querySelector('.drugi input')
pretraga.addEventListener('input',()=>{
let i = 0
console.log(pretraga.value)
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