// 1. Составить строку из слов и переменных `Я живу в ${country}`, вывести в консоль

/* const country = 'Ukraine';

console.log(`Я живу в ${country}`);
 */


//2. Составить строку из переменных с названиями firstname и id в формате Ivan_39, вывести в консоль

/* const firstname = 'Ivan';

const id = '39';

console.log(`${firstname}_${id}`); */


//3. Составить строки из переменных (названия переменных придумайте), значения переменных:
/* London, NewYork, Minsk,
Belorussia, USA, GreatBritain
Формат: `${} is a capital of ${}`
 */
/* 
const gb = 'GreatBritain';
const lond = 'London';

console.log(`${lond} is a capital of ${gb}`);


const bel = 'Belorussia';
const min = 'Minsk';

console.log(`${min} is a capital of ${bel}`);


const usa = 'USA';
const was = 'Washington'

console.log(`${was} is a capital of ${usa}`); */




/*  Синтаксис Вычисляемого свойства - объект["поле"]

1. Спросить у пользователя число и единицу измерения
Записать в обьект tail в свойство с названием единицы изм. значение числа от пользователя */

/* let userNum = prompt('Введите число');
let userUnit = prompt('Введите еденицу измерения');

const tail = {};
tail[userUnit] = userNum;

console.log(tail); */

/* 
2. Создать объект со свойствами box1, box2, box3, box... до 5
Заполнить свойства null  */
/* 
const boxes = {};

for (let i = 1; i <=5; i++) {
  boxes[`box${i}`] = null;
}

console.log(boxes); */



