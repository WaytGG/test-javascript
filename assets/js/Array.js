//Циклы и массивы + вычисляемые свойства

//1. Создать массив в переменную  и после заполнить его числами последовательно от 5 до 15

/* const arr = [];

for (let i = 5; i <= 15; i++) {
  arr[`${i - 5}`] = i;
}

console.log(arr); */




//2. Создать массив и заполнить его 10ю нечетными числами

/* const arr = [];

for (let i = 1; i <= 19; i+=2) {
  arr.push(i);
}

console.log(arr); */




//3. С помощью функции конструктора User создать 10 пользователей и поместить их в массив

/* function User(name) {
  this.name = name;
  this.age = '';
  this.email = '';
}

let user1 = new User('Oleg');
let user2 = new User('Anna');
let user3 = new User('Bogdan');
let user4 = new User('Vasya');
let user5 = new User('Kolya');
let user6 = new User('Gena');
let user7 = new User('Petr');
let user8 = new User('Artem');
let user9 = new User('Masha');
let user10 = new User('Dasha');
 
const users = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];

console.log(users); */



//4. * массив (с примитивными типами) перевести в строку с разделителем & или @

/* const test = ['asd', '12', 'qwe', 'zxc', '12'];

console.log(test.join( ' & ')); */



//5. * Переменную хранящей обьект преобразовать в массив


/* const userInfo = {
  name: 'Vasya',
  age: '20',
  email: 'asda@gmail.com'
}

console.log(Object.entries(userInfo)); */




 
