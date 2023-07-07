// Задача 1 решена
//С помощью метода массива sort отсортируйте массив people по возрастанию возраста
// и выведите их в консоль.

const people =  [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];

 function myFn(el){
    console.log(myFnCallback())
 }
 myFn()

 function myFnCallback(){
    return people.sort( (x, y) => x.age - y.age);
 }

 myFn(myFnCallback)
 
 //Задача 2

 //Реализуйте функцию filter, которая должна работать аналогично методу 
 //массива `filter. За основу возьмите функцию map, которую мы реализовывали на уроке.
//Чтобы из функции map сделать filter, нужно, в зависимости от результата вызова 
//ruleFunction, принимать решение о том, добавлять в результирующий массив очередной 
//элемент или нет.Возьмите за основу код ниже. Задание считается выполненным, если два 
//console.log в коде выводят правильное значение:

 const arr = [3, -4, 1, 9]

 const people2 = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
 ];
 

function isPositive(el) {

      return el >=0;
 }



function isMale(user) {
   return user.gender === 'male';
    
}

function filter(arr, callback){
    return arr.filter(callback)
       }
    

console.log(filter(arr, isPositive))
console.log(filter(people2, isMale))


// Задача № 3 решена

//Напишите программу, которая на протяжении 30 секунд каждые 3 секунды будет
// выводить в консоль текущую дату. Последней строкой должно выводиться сообщение
// «30 секунд прошло».

   function getData(timerCallback) {

        let myDate = new Date(); 
        return myDate.toString();
    
    }
    console.log(getData(timerCallback()))

    function timerCallback(){
    
       let timerId = setInterval(() => console.log(getData()), 3000);

       setTimeout(() => { clearInterval(timerId); console.log('30 секунд прошло'); }, 30000);
    
    };
    getData(timerCallback)
    

// Задача 4 решена

//Сейчас код ниже выводит в консоль «Привет, Глеб!» сразу после запуска.
//Допишите функцию delayForSecond так, чтобы приветствие выводилось в консоль
// не сразу, а спустя 1 секунду. Используйте setTimeout.



 function delayForSecond(callback) {
     setTimeout(() => {
           console.log('Прошла одна секунда');
           if(callback) { 	callback(); }
         }, 1000)
   callback();
 }

 delayForSecond(function () {
   console.log('Привет, Глеб!');
 })



// Задача 5 решена

//Посмотрите код. В нём допущена ошибка, и он выводит сообщения не в том порядке:

//Привет, Глеб!
//Прошла одна секунда
//Правильный порядок:

//Прошла одна секунда
//Привет, Глеб!
//Исправьте код, чтобы он выводил сообщения в правильном порядке:

 
   function delayForSecond(cb) {
    setTimeout(() => {
        console.log(`Прошла одна секунда`);
				if(cb) { 	cb(); }

    }, 1000)
}


function sayHi(name) {
    console.log(`Привет, ${name}`);
};

// Код выше менять нельзя

// Нужно изменить код ниже:
//delayForSecond(sayHi, "Глеб") // Прошла одна секунда. Привет indefinite

delayForSecond(sayHi => {
   console.log('Привет Глеб')
})