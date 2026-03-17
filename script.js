function add(num1, num2) {
    let numberOne = num1 * 1
    let numberTwo = num2 * 1
    return numberOne + numberTwo
}


function subtract(num1, num2) {
    let numberOne = num1 * 1
    let numberTwo = num2 * 1
    return numberOne - numberTwo
}



function multiply(num1, num2) {
    let numberOne = num1 * 1
    let numberTwo = num2 * 1
    return numberOne * numberTwo
}


function divide(num1, num2) {
    let numberOne = num1 * 1
    let numberTwo = num2 * 1
    return numberOne / numberTwo

}

const displayScreen = document.querySelector('.calculator_output')
const numbers = document.querySelector('.numbers_selection')
const allButtonsNr = document.querySelectorAll('.buttons')
const opMainClass = document.querySelector('.operators')
const operatorsAll = document.querySelectorAll('.operator')





let savedNumberOne = ''
// sohranila znachenie, chto vyshlo na DP chto by ispolzovat dalshe


//functions are called once before clicking the button!
//once you click, the code inside runs >eventlistener get called when button is clicked
function clickedNrOne() {


    for (const el of allButtonsNr) {

        el.addEventListener('click', () => {



            if (finalOperatorResult === '') {


                let currentText = displayScreen.innerText //0 as a start

                let btnVal = el.innerText //9 first num //8 second digit in first num


                if (currentText === '0') { //code start position when you open calculator


                    displayScreen.innerText = btnVal //vyvela first number chto nazhali > 9
                    savedNumberOne = btnVal //sohranila chto vyshlo na DP (9 gets saved)
                    console.log('first choice', savedNumberOne)
                }

                else { //if code is not 0 after clicking a button, it is 9 now, so this code runs:

                    let newDisplay = savedNumberOne + btnVal //oboznachili chto first+second click appears dp 9 & NEW DIGIT CLICKED 8

                    displayScreen.innerText = newDisplay //vyvela first+second click na display> 98
                    savedNumberOne = newDisplay //sohranila to, chto vyshlo na DP 98
                    console.log('first choice: second digit', savedNumberOne)

                }

            }

        })


    }

}
clickedNrOne()


let finalOperatorResult = ''
let appearOnDP = ''

function operatorPick() {



    for (const el of operatorsAll) {


        el.addEventListener('click', () => {



            let appearOnScreen = displayScreen.innerText //98 from previous time 


            let currentOp = el.innerText //clicked some operator

            if (currentOp === '=') {

                if (savedNumberOne === '' || finalOperatorResult === '' || savedNumberTwo === '') {
                    displayScreen.innerText = '0'
                    return

                }

                let result = calculations()
                displayScreen.innerText = result
                savedNumberOne = result
                finalOperatorResult = ''
                savedNumberTwo = ''
                appearOnDP = finalOperatorResult
                return
            }



            if (currentOp === 'AC') {
                displayScreen.innerText = '0'
                finalOperatorResult = ''
                savedNumberOne = ''
                savedNumberTwo = ''
                appearOnDP = finalOperatorResult
            }


            else {
                finalOperatorResult = currentOp //save current operator being displayed to use it later

                appearOnDP = appearOnScreen + currentOp //saved 98 & clicked operator
                console.log(appearOnDP)

                displayScreen.innerText = appearOnDP //showed 98 and clicked operator on screen
            }



            console.log('operator choice', finalOperatorResult)
        })

    }

}
operatorPick()


let savedNumberTwo = '' // will save number variable to reuse it later


function clickedNrTwo() {



    for (const el of allButtonsNr) {

        el.addEventListener('click', () => {
            if (finalOperatorResult !== '') {
                let secondBtnVal = el.innerText //clicked some second number
                savedNumberTwo += secondBtnVal //saved second number and following digits that are being clicked after the operator
                console.log('second nr choice', savedNumberOne + finalOperatorResult + savedNumberTwo)

                displayScreen.innerText = savedNumberOne + finalOperatorResult + savedNumberTwo//changed DP to current screen with operator and a new number



            }



        })


    }
}
clickedNrTwo()


function calculations() {

    if (finalOperatorResult === '+') {
        let sumTotal = add(savedNumberOne, savedNumberTwo)
        console.log(sumTotal)
        return sumTotal
    }

    else if (finalOperatorResult === '-') {
        let subtractTotal = subtract(savedNumberOne, savedNumberTwo)
        console.log(subtractTotal)
        return subtractTotal
    }

    else if (finalOperatorResult === '*') {
        let multiplyTotal = multiply(savedNumberOne, savedNumberTwo)
        console.log(multiplyTotal)
        return multiplyTotal
    }
    else if (finalOperatorResult === '/') {

        if (savedNumberTwo === '0') {
            return 'Undefined not possible to divide by 0'
        }
        else {
            let divideTotal = divide(savedNumberOne, savedNumberTwo)
            console.log(divideTotal)
            return divideTotal

        }



    }


}
calculations()


