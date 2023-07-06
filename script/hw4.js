 // Задача №1
  function lesser(a, b) {
   if (a < b) {
    return b;
   } else if (a === b){
    return a;
   } else{
    return b
   }
   }
   console.log(lesser(8, 4))
   console.log(lesser(6, 6))
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
    let askNumber = (n)  =>{
        if(isNaN(n)){
            return(`${n} переданный параметр не является числом`)
        } else {
            result = n * n * n
            return(`${result}`)
        }
    }

//alert(y(n))


  // задание №7

  function getSquareArea() {
    return Math.PI * this.radius * this.radius
  }

  function getSquarePerimeter() {
    return 2*Math.PI*this.radius
  }

   const circle1 = {
   radius: 5,

   Area: getSquareArea,
   Perimeter: getSquarePerimeter
   } 

    const circle2 = {
    radius: 8,

    Area: getSquareArea,
    Perimeter: getSquarePerimeter
      
    } 

    console.log(circle1.Area())
    console.log(circle1.Perimeter())
    console.log(circle2.Area())
    console.log(circle2.Perimeter())

     

         

