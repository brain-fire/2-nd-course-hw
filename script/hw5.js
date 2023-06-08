
// задача №1 

  const numbs = [1, 5, 4, 10, 0, 3];
  for (let i = 0; i < numbs.length; i++) {
    console.log(numbs[i])
	if (numbs[i] == 10) break;
	console.log(numbs[i]);
}


// задача №2 

const numberPosition = [1, 5, 4, 10, 0, 3];

console.log(numberPosition.indexOf(4))

if (numberPosition.indexOf(4) !== -1) {
    console.log('yes');
} else {
    console.log('no')
}


// задача №3 
 
  const space = [1, 3, 5, 10, 20]
  let arrNor = space.join(' ');
  console.log(space)

// задача № 4 
 const arry = [[1, 1, 1], [1, 1, 1], [1, 1, 1]]
  console.log(arry)

   const run = 3;
   let arr = [];
   for (let i = 0; i < run; i++){
     arr[i] = [1, 1, 1];
    }
    console.log(arry);


// задача № 5 

 const addElement = [1, 1, 1];
  addElement.push(2, 2, 2);
  console.log(addElement);

// Задача №6 
 const mix = [9, 8, 7, 'a', 6, 5]
 let arrMix = mix.sort()
 console.log(mix.pop())
 console.log(mix)

// Задача № 7 
 const test = [9, 8, 7, 6, 5]

 const userAsk = +prompt(' введите число от 0 до 10')

  if (test.includes(userAsk)) {
   console.log('yes')
   } else {
      console.log('no')
   }


// Задача №8 

 const str = 'abcdef';
 const strReverse = str.split('').reverse().join('')
 console.log(strReverse)

// задача №9 
 const oneLine = [[1, 2, 3,],[4, 5, 6]]

 const res = oneLine.reduce((acc, item) => acc.concat(item), []);

 console.log(res)

// Задача № 10

const sum = [1, 5, 4, 10, 0, 3];
console.log(sum)
for (let i = 0; i < sum.length; i++){
    sum[i] +=1;
}
console.log(sum)



 //Задача № 11

 const integer = [5, 8, 3];
 const getSquare = integer.map( (el => (el ** 2)))
 console.log(getSquare) 

// Задача № 12 
  let getLengthWords = ['слово', '', 'слог', 'длинное предложение', 'буква'];

  let arrLength = getLengthWords.map(function(item){
    return item.length;
})
console.log(arrLength) // [5, 0, 4, 19, 5]

  //Задача № 13 

 const arr1 = [-1, 0, 5, -10, 56];
 const arr2 = [-25, 25, 0, -1000, -2];

 function filterPositive(arr1, arr2) {
   return arr1.concat(arr2).filter(item => item <= -1)

}
console.log(filterPositive(arr1, arr2))

//filterPositive([-1, 0, 5, -10, 56]); // => [-1, -10]
//filterPositive([-25, 25, 0, -1000, -2]); // => [-25, -1000, -2]







