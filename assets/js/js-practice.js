//1. Создать пустой массив, с помощью push добавить в него цифры от 1 до 15

/* const arr = [];

for (i = 1; i <= 15; i++) {
  arr.push(i);
}
 */



//2. Добавить значение 0 в начало в массив из пред задания

//arr.unshift(0);



//3. Удалить один элемент с конца из массива пред задания

//arr.pop();



//4. Удалить один элемент где нибудь в середине (splice) из массива пред задания

//arr.splice(2,1);



//5. Добавить цифру 5 в середину массива (splice) из пред задания

//arr.splice(6,0,5);



//6. Клонировать весь массив (slice или Object.assign) из пред задания

//const arr2 = Object.assign([], arr);



//7. У клона массива пред задания удалить первую половину элементов
//(индексы от 0 до array.length/2 - 1)

//const arr3 = arr2.slice(0, arr2.length / 2 -1 );



//------------
//8. Создать пустой массив на 8 empty ячеек

//const arrEmpty = Array(8);



//9. Заполнить массив от половины (от индекса 3) до конца значениями null (fill)

//const arr4 = [1, 2, 3, 4, 5, 6, 7, 8];

//const arr5 = arr4.fill(null, 3);



//10. Отфильтровать от пустых ячеек (forEach+push или filter)

//const arrFilter = arrEmpty.filter(arrEmpty => arrEmpty.length);



//------------
//11. Создать массив с числами от 1 до 10. На основе него создать массив квадратов значений (map).

//const arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//const arr7 = arr6.map(Math.sqrt);



//12. Перевести массив из предыдущего задания в строку, с разделителем " && " (join)

//const arr8 = arr7.join(' && ');



//------------
//13. * Создать массив Склада. Заполнить массив от 3 до 5 продуктами
//Каждый продукт имеет свойства - наименование, базовая цена, колво на складе.

const storage = [
  {
    id: '1',
    productName: 'Apple',
    price: '20',
    balance: '1200',
  },
  {
    id: '2',
    productName: 'Orange',
    price: '35',
    balance: '400',
  },
  {
    id: '3',
    productName: 'Kivi',
    price: '30',
    balance: '350',
  },
];



//14. * Написать функцию которая будет фильтровать массив продуктов по количеству на складе больше 5 шт .
//И потом сортировать по возрастанию цены. (filter().sort()).Функция возвращает новый массив - результат фильтрации.

/* function retSortArr() {
  const arrFil = storage.filter(function (c) {
    return c.balance >= 5;
  });

  arrFil.sort(function (a, b) {
    return a.balance - b.balance;
  });
  return arrFil;
}

const result = retSortArr()

console.log(result); */



//------------
//15. * Создать массив для Корзины покупок.
//Спрашивать у пользователя ИД продукта (индекс массива склада) который он хочет положить в Корзину покупок.
//_Клонировать_ в Корзину обьект продукта, взятый из массива Склада (по ИД выбранному пользователем).




//------------
//16. * Создать функ. конструктор Пользователь.
//Принимать параметры - username, age, isMale, password.

/* function User(name, age, isMale, password) {
  this.username = name;
  this.age = age;
  this.isMale = isMale;
  this.password = password;
}

const user = new User('Oleg', '23', 'Male', '123qwe')

console.log(user); */

//17. * Циклом создать 5 пользователей (new User) и поместить каждого в массив users.

/* function User(name, age, isMale, password) {
  this.username = name;
  this.age = age;
  this.isMale = isMale;
  this.password = password;
}

for(i = 1; i <= 5; i++) {
  let users = new User;
  console.log([users]);
} */

