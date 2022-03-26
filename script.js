console.log('#5.a')
const a1 = 7;
const a2 = 9;
console.log(a1+a2);

console.log('#5.b')
const b1 = 17;
const b2 = 9;
console.log(b1-b2);

console.log('#5.c')
const c1 = 7;
const c2 = 9;
console.log(c1*c2);

console.log('#5.d')
const d1 = 9;
const d2 = 3;
console.log(d1/d2);

console.log('#6')
console.log('1 2 3 4 5');

console.log('#7')
console.log('5 4 3 2 1');

console.log('#8')
function getMarkInfo(condition) {
  if (condition===10) {
    console.log('У вас максимальный балл');
  }
  else {
    console.log('У вас средний балл');
  }
}
getMarkInfo(10)
getMarkInfo(1)

console.log('#9') 
function getDayInfo(position) {
  switch (position) {
    case 0 :
      console.log('Sunday');
      break;
    case 1 :
      console.log('Monday');
      break;
    case 2 :
      console.log('Tuesday');
      break;
    case 3 :
      console.log('Wednesday');
      break;
    case 4 :
      console.log('Thursday');
      break;
    case 5 :
      console.log('Friday');
      break;
    case 6 :
      console.log('Saturday');
      break;
    default:
      console.log('Wrong data');
  }
}
getDayInfo(0)
getDayInfo(1)
getDayInfo(2)
getDayInfo(3)
getDayInfo(4)
getDayInfo(5)
getDayInfo(6)

console.log('#10')
let arr = ['a', 'b', 'c']
arr[3] = 1;
arr[4] = 2;
arr[5] = 3;
console.log(arr);

console.log('#11')
let numbers1 = [1, 2, 3]
let numbers2 = [4, 5, 6]
let numbers = numbers1.concat(numbers2);
console.log(numbers)

console.log('#12')
function countNumber(number) {
  let numbersSum = 0;
  let numberCount = 1;
  do {
    numbersSum += numberCount;
    numberCount ++;
  }
  while (numberCount<=number)
  console.log(numbersSum);
}
countNumber(3)
countNumber(prompt('Введите число: '))