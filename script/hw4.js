 // Задача №1
  function sum(a, b) {
    return a < b
}

  function mult(a, b) {
   return a === b
}

 let calc = (8, 4)
 let num = (6, 6)

 let result = calc 
 let result2 = num

 console.log(`${result}`)
 console.log(`${result2}`)

// Задача № 2

  function even_or_odd(number) {
      return number % 2 === 0 ? "Odd" : "Even"
  }

  console.log(even_or_odd(1));
  console.log(even_or_odd(2));

 // Задача 3

  function pow(number){return number**2}

  console.log(pow(5))

 // Задача №4
   const askAge = (verification) => { 
      
      if (verification < 0) {
          
          alert('Вы ввели неправильное значение')
      } 
      else if (verification >= 0 && verification <= 12) {
         
       alert('Привет, друг!')
      }
      else if(verification > 12){
          
          alert('Добро пожаловать!')
      }
  }
  let verification = +prompt('Сколько вам лет?') 
  askAge(verification)

// Задание № 5
 
  const test = (a, b) => { 
    if (isNaN(a) || isNaN(b)){
        console.log('Одно или оба значения не являются числом');
    }else{
        console.log(a + b)    
    }
}
test('n', 8)
test(8, 'n')
test(6, 6)

// Задание № 6

    let n = +prompt(`введите число`)
    let y = (n)  =>{
        if(isNaN(n)){
            return(`${n} переданный параметр не является числом`)
        } else {
            result = n * n * n
            return(`${result}`)
        }
    }

//alert(y(n))


  // задание №7
   const circle1 = {
   'radius' : 'this.radius',
   'getArea': 'this.area',
   'get.Perimeter': 'this.perimeter'
        } 

    const circle2 = {
        'radius' : 'this.radius',
        'getArea': 'this.area',
        'get.Perimeter': 'this.perimeter'
         } 
         console.log(circle1)

   function circle(radius) {
    this.radius = radius;
  // area method
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
  // perimeter method
    this.perimeter = function ()
    {
        return 2*Math.PI*this.radius;
    };
}
let c = new circle(3);
console.log('Area =', c.area().toFixed(2));
console.log('perimeter =', c.perimeter().toFixed(2));
