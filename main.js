const but = document.querySelectorAll('button')
const p = document.querySelector('p')
const form = document.querySelector('form')

form.onsubmit = function(evt){
    evt.preventDefault()
    for (var i = 0; i< but.length; i++){
        const element = but[i]
        element.onclick = function(){
            if (p.innerHTML == 'NaN'){
                p.innerHTML = ""
            }
            if (element.value == 'clear'){
                p.innerHTML = ""
            }else if(element.value == 'back'){
                p.innerHTML = p.innerHTML.slice(0, -1)
            }else if (element.value == '=' || element.value == '+' || element.value == '-' || element.value == '*' || element.value == '/' || element.value == '^' || element.value == '√'){
                if (p.innerHTML.includes('+')== true){
                    const cyfry = p.innerHTML.split('+')
                    let el1 = parseFloat(cyfry[0])
                    let el2 = parseFloat(cyfry[1])
                    let wynik = (el1 + el2)
                    p.innerHTML = wynik
                } else if (p.innerHTML.includes('-')== true){
                    const cyfry = p.innerHTML.split('-')
                    let el1 = parseFloat(cyfry[0])
                    let el2 = parseFloat(cyfry[1])
                    let wynik = (el1 - el2)
                    p.innerHTML = wynik
                } else if (p.innerHTML.includes('*')== true){
                    const cyfry = p.innerHTML.split('*')
                    let el1 = parseFloat(cyfry[0])
                    let el2 = parseFloat(cyfry[1])
                    let wynik = (el1 * el2)
                    p.innerHTML = wynik
                } else if (p.innerHTML.includes('/')== true){
                    const cyfry = p.innerHTML.split('/')
                    let el1 = parseFloat(cyfry[0])
                    let el2 = parseFloat(cyfry[1])
                    if (el2 == 0){
                        p.innerHTML = 'ERROR: dzielenie przez 0'
                    } else {
                        let wynik = (el1 / el2)
                        p.innerHTML = wynik
                    }
                } else if (p.innerHTML.includes('^')== true){
                    const cyfry = p.innerHTML.split('^')
                    let el1 = parseFloat(cyfry[0])
                    let el2 = parseFloat(cyfry[1])
                    let wynik = Math.pow(el1,el2)
                    p.innerHTML = wynik
                } else if (p.innerHTML.includes('√')== true){
                    const cyfry = p.innerHTML.split('√')
                    let el = parseFloat(cyfry[1])
                    let wynik = Math.sqrt(el)
                    p.innerHTML = wynik
                } else if (element.value == '√'){
                    p.innerHTML += '&#8730' // √
                } else if (element.value == '^'){
                    p.innerHTML += '^' // ^
                } else if (element.value == '/'){
                    p.innerHTML += '/' // /  ÷
                } else if (element.value == '*'){
                    p.innerHTML += '*' // *  ×
                } else if (element.value == '+' || element.value == '-'){
                    p.innerHTML += element.value
                } 
                //                  &#8730    √
                //                  &#8743    ^
                //                  &#247     /
                //                  &#215     *
            }else {
                p.innerHTML += element.value
            }
        }
    }
}