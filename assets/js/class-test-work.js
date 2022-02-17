//Пример конструктора на class

class MyFunc {
  constructor(param1) {
    //конструктор
    this.field1 = param1;
  }

  mymethod() {
    console.log(this); //прототип
  }
}

const classInstance = new MyFunc(123);
console.log(classInstance);
classInstance.mymethod();

////////////////////////////////////////////////////

class Monkey {
  constructor(tail, age, banana, name) {
    this.lengthtail = tail;
    this.age = age;
    this.bananaslove = banana;
    this.name = name;
  }

  eat(eat) {
    console.log('умеет'+ eat);;
  }
  sleep(sleep) {
    console.log('умеет' + sleep);;
  }
  climb(climb) {
    console.log('есть' + climb);;
  }

  static needOxygen = true;
}

const mon = new Monkey('yes', 2, 'yes', 'Patrick');
console.log(mon);

//////////////////////////////////////////////

class Book {
  constructor(arrauthors, namebook, numpage) {
    this.arrauthors = arrauthors;
    this.namebook = namebook;
    this.numpage = numpage;
  }

  read(readpage) {
    console.log('страница' + readpage);
  }

  shelf(shelf) {
    console.log( shelf);
  }

  put(put) {
    console.log(put);
  }

  static bookStatic(printbook, sellbook) {
    printbook = printbook; //переделать
    sellbook = sellbook;
  }
}

const bookConst = new Book ('Oleg Perry', 'JavaScript',300);
console.log(bookConst);
console.log(Book.bookStatic('yes','no'));