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


/* function User(username, age, isMale, password) {
  this.username = username,
  this.age = age,
  this.isMale = isMale,
  this.password = password
}

let userOleg = new User('Oleg', '23', 'male', '123qwe');
console.log(userOleg); */