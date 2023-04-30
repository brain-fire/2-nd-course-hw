let spending = Number(prompt('сколько вы хотите потратить?'))
let bankAccount = 1000
let balance = bankAccount - spending

if (balance > 0) {
    alert('трата совершена на счету осталось ' + balance  + ' рублей ')
} else{
    alert('на счету недостаточно средств')
}

// Задание 1
let password = '12345'
prompt('введите пароль')

if (password === '12345') {
    alert('пароль введен верно')
} else {
    alert('пароль введен неправильно')
}

// задание 2

let с = 7
let result = (с > 0 && с < 10) ? alert('верно') : alert('неверно') // верно

let c = 10
let result = (c > 0 && c < 10) ? alert('верно') : alert('неверно') // неверно

let c = -3
let result = (c > 0 && c < 10) ? alert('верно') : alert('неверно') // неверно

let c = 2
let result = (c > 0 && c < 10) ? alert('верно') : alert('неверно') // верно

let c = 0
let result = (c > 0 && c < 10) ? alert('верно') : alert('неверно') // неверно

// Задание 3

let d = 87                                                               // неверно, если поменять местами d=111, e=87 будет верно
let e = 111
let result = (d > 100 || e < 100) ? alert('верно') : alert('неверно') 

// Задание 4

let a = '2'
let b = '3'
alert(a = b = 5)

// Задание 5
let monthNumber = 12;

switch (monthNumber) {
    case '1':
         alert('январь')
        break;
        case '2':
         alert('февраль')
        break;
        case '3':
         alert('март')
        break;
        case '4':
         alert('апрель')
        break;
        case '5':
         alert('май')
        break;
        case '6':
         alert('июнь')
        break;
        case '7':
         alert('июль')
        break;
        case '8':
         alert('август')
        break;
        case '9':
         alert('сентябрь')
        break;
        case '10':
         alert('октябрь')
        break;
        case '11':
         alert('ноябрь')
        break;
        case '12':
         alert('декабрь')
        break;


    default: alert('Ошибочка вышла!')
        break;
    }