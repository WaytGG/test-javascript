// 1.1) вывести в консоль числа от 1 до 10 включительно

/* for (let i = 1; i <= 10; i++) {
    console.log(i);
}  */



// 1.2) * вывести в консоль числа от -1 до -10 включительно

/* for (let i = -1; i >= -10; i--) {
  console.log(i);
}  */



// 2) посчитать результат умножения чисел от 1 до 5

/* let num = 1;
 
for (let i = 1; i < 6; i++) {
  num *= i;
  console.log(num);
}  */



// 3) вывести в консоль таблицу умножения на 7
// пример ('7 * ' + n + ' = ' + res)

/* const num = 7;

for (let i = 1; i <= 10; i++) {
  const result = num * i;
  console.log(result);
}  */



// 4) посчитать сумму нечетных чисел от 1 до 15
  
/* let sum = 0;
  
for (let i = 1; i <= 15; i++){
  if (i % 2 === 1) {
    sum += i;
  }
}
console.log(sum); */



// 5.1) циклом добавить 7 звездочек в строку

/* let str = '';

for (let i = 1; i <= 7; i++) {
  str += '*';
} 
console.log(str); */



// 5.2) * кол-во звездочек определяет пользователь
/* 
let userStars = prompt('Введите *');

function stars (str) {
  for (let i = 1; i <= str; ) {
  str += '*';
  }
  return str;
}

result = stars(userStars);
console.log(result); */



// 6) * 2 цикла которые добавят звездочки и "\n" в переменную и составят квадрат из звездочек



// 7) * спрашивать пользователя определенное число до тех пор пока он его не отгадает
  
/* 
while (true) {
  const num = Number(prompt('Угадайте число от 0 до 10'));
  
  if (num === 7) {
    alert('Верно!');
    break;
  } 
  else alert('Нет, введите еще раз');
}  */
