const but = document.querySelectorAll('button')
const p = document.querySelector('p')
const form = document.querySelector('form')

form.addEventListener('click' , function(){
    for (var i = 0; i< but.length; i++){
        p.innerHTML = but[i].value
    }
})
    