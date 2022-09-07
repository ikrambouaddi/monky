let monkey = document.querySelector('.close')
let openmenkey =document.querySelector('.open')
console.log(monkey)

monkey.addEventListener('click',function(){
    if(openmenkey.classList.contains=('open')){
    openmenkey.classList.add('active')
    monkey.classList.remove('active')
    }
})


openmenkey.addEventListener('click',()=>{
    if(monkey.classList.contains=('close')){
        monkey.classList.add('active')
        openmenkey.classList.remove('active')
    }
}
)