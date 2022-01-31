// Task#1 функция которая приветствует пользователя в зависимости от полученного имени sayHello('Viktor') Привет Viktor

/* let userName = prompt("Как Вас зовут?");
function sayHello(userHi) {
  // return "Привет" + " " + userHi;
}
let result = sayHello(userName);

alert(result); */

// Task#2 функция которая вернет правду если полученная параметр строка не пустая

/* let questionUser = prompt("Wanna water?");

function question(notEmpty) {
  if (notEmpty === "") {
    return false;
  } else {
    return true;
  }
}

let result = question(questionUser);

console.log(result); */

// Task#3 функция которая принимает параметры цену продукта и кол-во, возвращает общую сумму заказа

/* let priceProduct = prompt("Цена продукта");

let amount = prompt("Количество");

function price(priceUser, amountUser) {
  finalPrice = Number(priceUser * amountUser);

  if (isNaN(finalPrice)) {
    return null;
  } else {
    return finalPrice;
  }
}

let result = price(priceProduct, amount);

alert(result);*/

// Task#4 функция которая принимает параметры сумму заказа и кол-во денег в кошельке, и возвращает хватает ли денег купить эти товары

/* let priceAmount = prompt("Сумма заказа");

function price(priceAmountUser) {
  let money = Number(300);

  if (isNaN(priceAmountUser)) {
    return null;
  }

  if (priceAmountUser > money) {
    return 'Недостаточно средств';
  } else {
    return 'У Вас достаточно средств для покупки';
  }
}

let result = price(priceAmount);

alert(result); */

//Task#5 функция которая принимает параметр кол-во этажей подьезда (с 4мя квартирами на этаже) и вернет посчитаное общее колво квартир в подьезде
/* 
let qustionStorey = prompt("Сколько этажей?");

function amountStorey(storey) {
  let answerStorey = Number(storey * 4);

  if (isNaN(answerStorey)) {
    return null;
  } else {
    return answerStorey;
  }
}

let result = amountStorey(qustionStorey);

alert(result); */

//Task#6*  функция которая проверит что полученное как параметр число находится между 0 и 10, вернет ложь если снаружи диапазона

/* let questionNumber = prompt("Введите число");

function numberRange(numberAnswer) {
  if (isNaN(numberAnswer)) {
    return null;
  }

  if ((numberAnswer) >= 10) {
    return false;
  } else {
    return true;
  }
}

let result = numberRange(questionNumber);

alert(result); */

//Task#6** функция которая вернет модуль (abs) числа (если пришло отрицательное то вернет положительное, если положительное то вернет положительное)

/* let numberQuestion = prompt('Введите число')

function returnNumber(a) {
  let modul =  Math.abs(a);

  if (isNaN(modul)) {
    return null;
  } else {
  return modul;
  }
}

let result = returnNumber(numberQuestion);

alert(result); */

//Task#6*** функция которая вернет случайное (random) число от 0 до 10

/* let num1 = 0;

let num2 = 10;

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let result = getRandom(num1, num2);

alert(result); */

//Task#6**** функция которая вернет квадратный корень числа (sqrt)

/* let numberQuestion = prompt('Введите число');

function returnSqrt (n) {
  if (isNaN(n)) {
    return null;
  } else {
    return Math.sqrt(n);
  }
}

let result = returnSqrt(numberQuestion);

alert(result); */

//Task#6***** функция которая посчитает корни квадратного уравнения (Не работает)

/* let num1 = prompt("Введите число");

let num2 = prompt("Введите число");

let num3 = prompt("Введите число");

function square(a, b, c) {
  let discr = b * b - 4 * a * c;

  let d = discr;
  if (d < 0) return d;

  let x1 = (-b + Math.sqrt(d)) / (2 * a);
  let x2 = (-b - Math.sqrt(d)) / (2 * a);
  return (d, x1, x2);
}

let result = square(num1, num2, num3);

alert(result); */

//Task функция которая вернет сезон года в зависимости от полученного номера месяца getSeason(2) // 'зима' getSeason(9) // 'лето'

/* let num = prompt("Введите номер месяца");

function funcSeason(season) {
  if (isNaN(season)) {
    return alert(null);
  }
  switch (season) {
    case "12":
    case "1":
    case "2":
      alert("Зима");
      break;
    case "3":
    case "4":
    case "5":
      alert("Весна");
      break;
    case "6":
    case "7":
    case "8":
      alert("Лето");
      break;
    case "9":
    case "10":
    case "11":
      alert("Осень");
      break;
  }
}

funcSeason(num); */
