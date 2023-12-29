let num = 42 //number
let name = "Yerkebulan" //string
let surname = "Alibek" 
const isStudent = true //boolean

//console.log("My name is", name, surname)

//console.log(num + 10)
//console.log(num - 10)
//console.log(num * 10)
//console.log(num / 10) //float

//let num2 = num + 10
//console.log(num, num2)
//num = num2-num
//num2 = num2 + 1
//console.log(num, num2)


//let num3 = num + (10 * 2) / 5 - 1
//console.log(num3)


//console.log(resultElement.textContent)
//resultElement.textContent = (42 - 2) / num
    const resultElement = document.getElementById('result')
    const input1 = document.getElementById('input1')
    const input2 = document.getElementById('input2')
    const calculateBtn = document.getElementById('calculate') 
    const plusBtn = document.getElementById('plus') 
    const minusBtn = document.getElementById('minus')
    let action = '+'
    //console.log(typeof sum)

plusBtn.onclick = function () {
    action = '+'
}

minusBtn.onclick = function () {
    action = '-'  
}

function printResult (result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    } else {
        result.Element.style.color = 'green'
    }
    resultElement.textContent = result
}
        

calculateBtn.onclick = function () {
    if (action == '+') {
        const sum = Number(input1.value) + Number(input2.value)
        printResult(sum)
    }   else if (action == '-') {
        const sum = Number(input1.value) - Number(input2.value)
        printResult(sum)
    }resultElement.textContent = sum
    console.log(sum)
}
