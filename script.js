let h2 = document.querySelectorAll(".calc-body h2");
let display = document.querySelector("#display")
let DeleteOne = document.getElementById("back")
let count = 0
let number = 0
const operators = ['+', '-', '*', '/', '%', '.', 'x<sup>2</sup>', '+/-'];
let string = ''
h2.forEach(function (e) {
    e.addEventListener("click", function () {
        if (count == 0) {
            if (operators.includes(e.innerHTML) || e == DeleteOne || e.innerHTML == '=') {
                display.innerHTML += ''
            }
            else {
                display.innerHTML = e.innerHTML;
                string = display.innerHTML
                count++
            }
        }
       else if (e.innerHTML == '=') {
            string = eval(string)
            display.innerHTML = string
        }
        else if (e.innerHTML == 'Cl') {
            display.innerHTML = ''
            count = 0
        }
        else if (e == DeleteOne) {
            string = string.substring(0, string.length - 1)
            display.innerHTML = string
        }
        else if(e.innerHTML == 'x<sup>2</sup>')
            {
                string =string*string
                display.innerHTML=string
            }
        else if(e.innerHTML == '+/-')
            {
                string =(-string)
                display.innerHTML=string
            }
        else if (operators.includes(number) && operators.includes(e.innerHTML)) {
            display.innerHTML += ''
        }
        else if (count <= 11) {
            display.innerHTML += e.innerHTML;
            number = e.innerHTML
            string = display.innerHTML
            count++
        }
       
    })
})