// 1. Создать функцию которая вернет максимальное число из двух
// maxNum(3, 7) // 7
// maxNum(5, 1) // 5

/* let num1 = prompt("Введите первое число");

let num2 = prompt("Введите второе число");

function maxNumber(maxNum1, maxNum2) {
  if (isNaN(maxNum1) || isNaN(maxNum2)) {
    return null;
  }

  if (maxNum1 > maxNum2) {
    return maxNum1;
  } else {
    return maxNum2;
  }
}

const result = maxNumber(num1, num2);

console.log(result); */



//2. Создать функцию isAdult, которая будет проверять возраст пользователя на совершеннолетие:
//isAdult(20); // true
//isAdult(4); // false

/* let isAdultAge = prompt("Сколько Вам лет?");

function isAdult(userAge) {
  if (isNaN(userAge)) {
    return null;
  }

  if (userAge >= 18) {
    return true;
  } else {
    return false;
  }
}

let result = isAdult(isAdultAge);

console.log(result); */



// 3. Создать функцию checkMultiplicity, которая принимает два числа и проверяет кратность нацело первого вторым:
// checkMultiplicity(25, 5) // true
// checkMultiplicity(15, 3) // true
// checkMultiplicity(15, 5) // true
// checkMultiplicity(15, 4) // false

 
/* let num1 = prompt('Введите число');
let num2 = prompt('Введите число');

function checkMultiplicity(n1, n2){
  if (isNaN(n1) || isNaN(n2)){
  return null;
  } 

  if (n1 % n2) {
  return false;
  } else return true;
}

let result = checkMultiplicity(num1, num2);

console.log(result); */



// 4. Проверка возможности треугольника. Создать функцию которая принимает длины треугольника;
// функция возвращает true если треугольник возможен и false если нет

/* let n1 = prompt("Введите 1 сторону треугольника");

let n2 = prompt("Введите 2 сторону треугольника");

let n3 = prompt("Введите 3 сторону треугольника");

function triangle(a, b, c) {
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    return null;
  }

  if (a + b > c && a + c > b && b + c > a) {
    return true;
  } else {
    return false;
  }
}

let result = triangle(n1, n2, n3);

alert(result);
 */