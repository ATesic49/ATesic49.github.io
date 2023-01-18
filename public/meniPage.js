const jela = document.querySelectorAll('.treci')
const pretraga = document.querySelector('.drugi input')
pretraga.addEventListener('input',()=>{
    let i = 0
    console.log('hi')
const search = pretraga.value
jela.forEach(async(jelo)=>{
    console.log(jelo.querySelector('.naziv').innerHTML.toLowerCase())
    if(jelo.querySelector('.naziv').innerHTML.toLowerCase().includes(search.toLowerCase())){
        jelo.style.display = 'flex'
    }else{
        jelo.style.display = 'none'
        return i++
    }
});
if (i==jela.length){
    console.log('i je jednako kao length')
    jela.forEach(jelo=>{
        jelo.style.display = 'flex'
    })
}
})  