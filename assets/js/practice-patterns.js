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



/* 1. создайте объект со структурой и заполните данными спросите у пользователя:
{
id,
firstname,
lastname,
age,
} */

/* const userId = prompt('Введите id');
const userFirstname = prompt('Введите Имя');
const userLastame = prompt('Введите Фамилию');
const userAge = prompt('Введите свой возраст');

const userInfo = {
  id: '',
  firstname: '',
  lastname: '',
  age: ''
}

userInfo.id = userId;
userInfo.firstname = userFirstname;
userInfo.lastname = userLastame;
userInfo.age = userAge;

console.log(userInfo); */



/* 2. Создайте обьект-лифт
свойство хранящее текущий этаж, и метод смены этажа */

/* let elevator = {
  floor: '1',
  up: function () {
    this.floor++;
  },
  down: function () {
    this.floor--;
  }
}

elevator.down();

elevator.up();
elevator.up();
console.log(elevator); */




//3. Клонировать обьект A и на его основе создать клон B

/* const a = {
  firstname: 'Vasya',
  lastname: 'Pupkin',
  age: '22'
}
const b = Object.assign({}, a);

console.log(b); */



/* 4. Создать _шаблон_ обьекта Пользователь.
Принимать параметры - username, age, isMale, password. */

/* 
function User(userInfo) {
  this.username = 'Vasya';
  this.age = '25';
  this.isMale = 'Male';
  this.password = 'qwe123';
}
console.log(User);

let userOleg = new User();
console.log(userOleg); */