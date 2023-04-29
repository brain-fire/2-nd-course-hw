// Задание 1//
let a 
a = 10
a = 20
alert (a);

// абсолютно не понимаю, каким образом необходимо записать в переменную "а" значение 20//


// Задание 2//
const year = 2009
alert (year)

// Задание 3//
let username
username = "Brendan Eich"
alert (username)

// Задание 4//
let x = 10
let y = 2
let xy = x + y
let yx = x - y
let xxy = x * y
let yyx = x / y
alert(x)
alert(y)
alert(xy)
alert(yx)
alert(xxy)
alert(yyx)

// я не понимаю какой код создать чтобы в alert вывести все значения т.е. сложение, вычетание, умножение и деление. Или решение задачи подразумевает разные переменные?// 

//Задание 5//
let degree = 2
let up = 5
let result = degree ** up
alert (result)

// Задание 6//
let aa = 9
let bb = 2
alert(aa % bb)

// Задание 7//
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
++num;
--num;
alert (num)
// не поняла, что значит переписать код? Типа скопировать?

//Задание 8//
let age = Number(prompt('сколько вам лет?'))
alert (age)

// Задание 9//

let person = {
    name: 'Peter',
    age: 23,
    isAdmin: true
}
person['city of residence'] = 'Kaliningrad'
person. age = 18
delete person['city of residence']
let info = prompt("какую информацию хотите узнать о пользователе?", "name")
console.log (person[info])
alert(person[info])




// Задание №10//

let user = prompt('Как вас зовут?')
alert('Привет ' + user + '!')