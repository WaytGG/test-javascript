//1. Массив чисел от 5 до 10 добавить в конец другого массива

/* const arr = ['test', 23, 99];

const arr2 = arr.push(5, 6, 7, 8, 9, 10);

console.log(arr); */



//2. Дан массив чисел [4, 9, 16, 25, 36, 49]. На его основе создать массив с квадратными корнями чисел (Math.sqrt)

/* const arr = [4, 9, 16, 25, 36, 49];

const arr2 = arr.map(Math.sqrt);

console.log(arr2); */



//3. Дан массив чисел 1...20. Вычислить сумму нечетных чисел массива

/* let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function arraySum(array){
let sum = 0;
for(let i = 0; i < array.length; i++){
    sum += array[i];
    }
console.log(sum);
}
arraySum(arrNum); */


//4. * Дан массив чисел 1 до 10. Удалить у него каждое нечетное значение

/* const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const resultNumbers = arrNumbers.filter(function(i) {
    return i % 2 === 0;
});

console.log(resultNumbers); */

/* 5. * Обычным циклом создать массив строк от "user1" до "user15".
Удалить все ячейки содержащие на конце строки символы 2, 3, 4.
Пример (подчёркнутые должны быть удалены)
[ "user1", _"user2"_, _"user3"_, _"user4"_, "user5", ..., _"user12"_ ]
 */

let arrCicle = [];

for (let i = 1; i <= 15; i++) {
    arrCicle.push('user'+i);
} 
console.log(arrCicle);

// (Удалить не получилось)

