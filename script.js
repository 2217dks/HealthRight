let signBackBtn = document.getElementById('signBackBtn')
let signBtn = document.getElementById('signBtn')
let phone = document.getElementById('phone')
let calc = document.getElementById('calc')
let famCount = document.getElementById('family')
let output = document.getElementById('recommendation')
if (calc !== null){
    calc.addEventListener('click', function(){
        family = famCount.value
        if (family <= 2) {
            output.innerHTML = "You should get <b>StartWell Basic</b>"
        } else if (family <= 4) {
            output.innerHTML = "You should get <b>Family Care Plan</b>"
        } else {
            output.innerHTML = "You should get <b>Complete Balance Care</b>"
        }
    })
}
if (signBackBtn !== null){
    signBackBtn.addEventListener('click', function(){
        window.history.back()
    })
}
if (signBtn !== null){
    signBtn.addEventListener('click', function(){
        alert(phone.value)
    })
}