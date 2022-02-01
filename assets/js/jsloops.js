// 1.1) вывести в консоль числа от 1 до 10 включительно

/* for (let i = 1; i <= 10; i++) {
    console.log(i);
} */


// 1.2) * вывести в консоль числа от -1 до -10 включительно
/* 
for (let i = -1; i >= -10; i--) {
  console.log(i);
} */


// 2) посчитать результат умножения чисел от 1 до 5
 /*
 let result = 1;

 for (let i = 1; i < 6; i++) {
   result = result *i;
   console.log(result);
 }
  
 */


// 3) вывести в консоль таблицу умножения на 7
// пример ('7 * ' + n + ' = ' + res)

/*
 for (let i = 1; i <= 9; i++) {
   const seven = 7;
   console.log(seven * i);
 }
  
 */


// 4) посчитать сумму нечетных чисел от 1 до 15
/* 
let sum = 0;
for (let i = 1; i <= 15; i++){
  if (i % 2 === 1) {
    sum += i;
}
console.log(sum);
 */

// 5.1) циклом добавить 7 звездочек в строку

/* let str = 'Stars'
for (let i = 1; i <= 7; i+=2) {
  str += '*';
  console.log(str);
} */


// 5.2) * кол-во звездочек определяет пользователь

/* let str = 'Stars'
for (let i = 1; i <= numberOfStars; i++) {
  str += '*';
  console.log(str);
} */

// 6) * 2 цикла которые добавят звездочки и "\n" в переменную и составят квадрат из звездочек



// 7) * спрашивать пользователя определенное число до тех пор пока он его не отгадает
 
/* const num = 7;
let a = prompt('Введите число');

function myPromptNumber(x) {
    while(a != x)
        alert('Wrong!');
    alert('Bingo!');
    return Number(a);
}
y = myPromptNumber(num);
console.log(y); */
