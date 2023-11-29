const formBank = document.forms.cardForm
const card = document.querySelector('.card')
const logo = document.querySelector('.bank')
const system = document.querySelector('.system')
const number = document.querySelector('.number')
const dateRes = document.querySelector('.dateRes')
const nameRes = document.querySelector('.name')
const codeRes = document.querySelector('.cvv')
const resultsContainer = document.querySelector('.results')

const selectBank = formBank.children.bank
const selectSystem = formBank.children.type
const numberInput = formBank.children.number
const date = formBank.children.date
const name1 = formBank.children.name
const code = formBank.children.cvv
const arrData = []

function swithBank(){
    switch (selectBank.value) {
        case 'СБЕР':
            card.style.backgroundColor = 'green'
            card.style.color = 'white'
            card.style.border = 'none'
            logo.src = './logos/sber.png'
            return './logos/sber.png'
            break
        case 'ТИНЬКОФФ':
            card.style.backgroundColor = 'yellow'
            card.style.color = 'black'
            card.style.border = 'none'
            logo.src = './logos/tink.png'
            return './logos/tink.png'
            break
        case 'АЛЬФАБАНК':
            card.style.backgroundColor = 'white'
            card.style.color = 'black'
            card.style.border = '2px solid red'
            logo.src = './logos/Alfabank.png'
            return './logos/Alfabank.png'
            break    
        default:
            break
    }
}

function switchSystem(){
    switch (selectSystem.value) {
        case 'VISA':
            system.src = './logos/visa.png'
            return './logos/visa.png'
            break
        case 'MASTERCARD':
            system.src = './logos/Mastercard.png'
            return './logos/Mastercard.png'
            break
        default:
            break
    }
}

function checkNum(str){
    if (str.length > 0){
        let a = str.slice(str.length - 1, str.length)
        if (isNaN(parseInt(a))){
            alert('вы ввели букву вместо цифры')
            return str.slice(0, str.length - 1)
        } else {
            return str
        }
    } else {
        return str
    }
}

swithBank()
switchSystem()
selectBank.addEventListener('change', () => {
    swithBank()
})

selectSystem.addEventListener('change', () => {
    switchSystem()
})

numberInput.addEventListener('input', function() {
    let newNum = ''
    let num = this.value.slice(0,16)
    this.value = this.value.slice(0,16)
    let res = checkNum(num)
    for (let i = 0; i < res.length; i++){
        newNum += res[i]
        if (i == 3 || i == 7 || i == 11){
            newNum += ' '
        }
    }
    number.innerText = newNum
    this.value = res
})

date.addEventListener('input', function() {
    let newNum = ''
    let num = this.value.slice(0, 5)
    let res = checkNum(num)
    for (let i = 0; i < res.length; i++){
        newNum += res[i]
        if (i == 1){
            newNum += '/'
            i = 2
        }
    }
    dateRes.innerText = newNum
    this.value = newNum
})

name1.addEventListener('input', function() {
    nameRes.innerText = this.value
})

code.addEventListener('input', function() {
    let num = this.value.slice(0, 3)
    let newNum = checkNum(num)
    codeRes.innerText = newNum
    this.value = newNum
})

let num = 1
formBank.addEventListener('submit', function(e) {
    e.preventDefault()
    let newNum = ''
    for (let i = 0; i < this.number.value.length; i++){
        newNum += this.number.value[i]
        if (i == 3 || i == 7 || i == 11){
            newNum += '   '
        }
    }
    this.reset()
    switсhBank()
    switchSystem()
    number.innerText = '0000 0000 0000 0000'
    monthRes.innerText = '00'
    yearRes.innerText = '00'
    nameRes.innerText = 'NAME SURNAME'
    codeRes.innerText = '000'
})