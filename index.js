const inputFirst = document.getElementById('firstNumber'),
    inputSecond = document.getElementById('secondNumber'),
    res = document.getElementById('res'),
    action = document.getElementById("action"),
    submitButton = document.getElementById("submitButton"),
    change = document.getElementById("change");
let sum = 0,
    flag = false;
submitButton.addEventListener('click', () => {

    if (action.value === 'pl') {
        sum += +inputFirst.value + +inputSecond.value
    } else if (action.value === 'min') {
        sum += +inputFirst.value - +inputSecond.value
    } else if (action.value === 'mul') {
        sum += +inputFirst.value * +inputSecond.value
    } else if (action.value === 'div') {
        sum += +inputFirst.value / +inputSecond.value
    }

    res.innerHTML = sum
    inputFirst.value = ''
    inputSecond.value = ''
    sum = 0
})

change.addEventListener('click', () => {

    if (!flag) {
        document.body.style.backgroundColor = '#293226'
        document.body.style.color = '#d7d1d9'
        document.body.style.transition = "all 1.5s";
        flag = true
    } else if (flag) {
        document.body.style.backgroundColor = '#d7d1d9'
        document.body.style.color = '#293226'
        document.body.style.transition = "all 1.5s";
 
        flag = false
    }


})



