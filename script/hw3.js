// Задание 1
let i = 0
while (i < 2){
    alert('Привет!')
    i++
}

// Задание 2
let a = 1
while (a <= 5){
    alert(a)
    a++
}

// Задание 3
let b = 7
while (b  <= 22){
    alert(b)
    b++
}

// Задание 4
const obj = {
	'Коля': '200',
	'Петя': '300',
	'Вася': '400',
};
for (let key in obj){
    console.log(`${key} - зарплата ${obj[key]} долларов`);
}

// Задание 5
for (let n = 0; n <= 50; n++) {
    if(1000 % 2  == 0 ){
        console.log(n)
        let num = 50
    }
  }


// Задание 6
for (let dayNumber = 5; dayNumber <= 31; dayNumber++) { 
      if (dayNumber % 7 == 0) {
          console.log("сегодня пятница ...-e число, необходимо подготовить отчет!"); 
          continue; 
      }
      console.log("план работ на сегодняшний день:..."); 
  }
