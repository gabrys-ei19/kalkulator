const but = document.querySelectorAll('button')
const p = document.querySelector('p')
const form = document.querySelector('form')

form.onsubmit = function(){
    for (var i = 0; i< but.length; i++){
        p.innerHTML += but[i].value
    }
}

for (var i = 0; i< but.length; i++){
    console.log(but[i].value)
}
