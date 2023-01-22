const pretraga = document.querySelector('.drugi input')
const segment = document.querySelectorAll('.segment')
const jelo = document.querySelectorAll('.box')
pretraga.addEventListener('input',()=>{
    let i = 0
    let m=0
    console.log('hi')
const search = pretraga.value
segment.forEach((segment)=>{

    if(segment.querySelector('h2').innerHTML.toLowerCase().includes(search.toLowerCase())  ){
        segment.style.display = 'flex'
    }else{
        segment.style.display = 'none'
        return i++
    }
});
if (i==segment.length){
    segment.forEach(segment=>{
        segment.style.display = 'flex'
    })
}



jelo.forEach((jelo)=>{
    if(jelo.querySelector('h4').innerHTML.toLowerCase().includes(search.toLowerCase())){
        jelo.style.display = 'flex'
    }else{
        jelo.style.display = 'none'
        return m++
    }

})

if (m==jelo.length){
    jelo.forEach(jelo=>{
        jelo.style.display = 'flex'
    })
}



}) 

const box= document.querySelectorAll('.box')
box.forEach(box=>{
    
    box.querySelector('.naruci').addEventListener('click',()=>{
        nijebody.style.display='block'
        box.querySelector('.prekobox').style.display='flex'

    })

    })
    nijebody.addEventListener('click',()=>{
        box.forEach(box => {
            
            box.querySelectorAll('.prekobox').forEach(prekobox=>{
                console.log('prekoboxdisplaynone')
                prekobox.style.display='none'
                nijebody.style.display='none'
            })


        });
        
       
})




box.forEach(box=>{
const konacnaCena=box.querySelector('.cena').querySelector('span').innerText

if(box.querySelector('select')!== null){

    box.querySelector('select').addEventListener('input',()=>{
        let vrednost = box.querySelector('input').value
        console.log(box.querySelector('select').value * vrednost * konacnaCena)
        box.querySelector('.prekobox span').innerHTML = Math.ceil(box.querySelector('select').value * vrednost * konacnaCena)

    })  

}
box.querySelector('input').addEventListener('input',()=>{
let vrednost = box.querySelector('input').value
if(box.querySelector('input').value<1){
    vrednost = 1
}    

    if(box.querySelector('select')!== null){
        console.log(box.querySelector('select').value * vrednost * konacnaCena)
        box.querySelector('.prekobox span').innerHTML =Math.ceil( box.querySelector('select').value * vrednost * konacnaCena)
    }else{
        box.querySelector('.prekobox span').innerHTML=Math.ceil( vrednost*konacnaCena)
    }

    
})



box.querySelector('.prekobox button').addEventListener('click',()=>{
    box.addEventListener('.prekobox').style.display='none'
})


})



const iframe = document.querySelector('.iframe')
const korpa = document.querySelector('.korpa img')
const potvrdi =document.querySelector('.potvrdi')

korpa.addEventListener('click',()=>{
    iframe.style.display='block'
    nijebody.style.display='block'
    potvrdi.style.display='block'

})
nijebody.addEventListener('click',()=>{
    nijebody.style.display='none'
    iframe.style.display='none'
    potvrdi.style.display='none'

})