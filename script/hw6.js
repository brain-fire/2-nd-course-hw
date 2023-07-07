

// Задача № 1 

 let str = 'js' // верхний регистр JS.
 let newString = str.toUpperCase()
   console.log(newString)


// Задача № 2

const arr1 = ['Кошка', 'Кит', 'Комар', 'Носорог'];
const arr2 = ['яблоко', 'груша', 'гриб', 'огурец'];
const arr3 = ['Дом', 'Банк', 'Больница', 'Театр'];

const searchStart = arr1.filter(item => {
    return item.toLowerCase().includes('ко'.toLowerCase())
})
console.log(searchStart) // ['кошка', 'комар']

const searchStart1 = arr2.filter(item => {
    return item.toLowerCase().includes('гру'.toLowerCase())
})
console.log(searchStart1) // ['груша']

const searchStart2 = arr3.filter(item => {
    return item.toLowerCase().includes('кино'. toLocaleUpperCase())
})
console.log(searchStart2)// []

 
// Задача №3

//Округлите число 
  let num = 32.58884;
  console.log(Math.floor(32.58884))  //До меньшего целого
  console.log(Math.ceil(32.58884))   //До большего целого
  console.log(Math.round(32.58884))  //До ближайшего целого


// Задача № 4 
//Даны числа 52, 53, 49, 77, 21, 32

 console.log(Math.min.apply(null, [52, 53, 49, 77, 21, 32])) // 21
 console.log(Math.max.apply(null, [52, 53, 49, 77, 21, 32])) // 77

// Задача № 5 

  function getRandomInt(min, max) {
      return Math.random() * (max - min) + min; // рандомное число 1-10
    }
    console.log(getRandomInt(1, 10))

//Задача №6 
  
  function getRandomArrNumbers(num) {
  
      let res = [];
      let resLenght = Math.floor(num/2);
  
      for (let i = 0; i < resLenght; i++) {
          res.push(Math.floor(Math.random() * num));
          }
          return res;
      }
      console.log(getRandomArrNumbers(7))
      console.log(getRandomArrNumbers(12))

//Задача № 7 

  function getRandom(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
    }

    console.log(getRandom(8, 16))


//Задание № 8 


  let myDate = new Date('3/27/21');  // let myDate = new Date("3/27/2021");
  console.log(myDate); 

 //Задание № 9

  let currentDate = new Date("06/05/2023")
  currentDate.setDate(currentDate.getDate() + 73);
  console.log(currentDate)


// Задача № 10 


  function formatDate (myDate) {
   const day = myDate.getDay(); // 0-6
   const dayTitle = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

   const date = myDate.getDate().toString().padStart(2, "0");
   const month = myDate.getMonth(); // 0-11
   const monthTitle = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня' ,'Июля' ,'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
   //const month = (myDate.getMonth() +1).toString().padStart(2, "0");
   const year = myDate.getFullYear();

   const hour = myDate.getHours().toString().padStart(2, "0")
   const minute = myDate.getMinutes().toString().padStart(2, "0") 

   return `${dayTitle[day]}, ${date} ${monthTitle[month]} ${year}, ${hour}:${minute}`
   
  }
   console.log(formatDate(myDate));
