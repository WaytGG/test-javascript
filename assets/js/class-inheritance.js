class Animal {
  constructor(herbivore, sleep) {
    this.herbivore = herbivore;
    this.sleep = sleep;
  }
  sleep(sleep) {
    console.log(sleep);
  }

  eat(eat) {
    console.log(eat);
  }
};

const animalRes = new Animal('no', 'yes');
console.log(animalRes);

///////////////////////////////////////////////////////////
class Cat extends Animal {
  constructor(wool, colwool, lentail,numpaws,canswim){
    super();
    this.wool = wool;
    this.colorwool = colwool;
    this.lengthtail = lentail;
    this.numpaws = numpaws;
    this.canswim = canswim;
  }

  say(say) {
    console.log(say);
  }

  swim(swim) {
    console.log(swim);
  }

  climb(climb) {
    console.log(climb);
  }
}

const catRes = new Cat();
console.log(catRes);

/////////////////////////////////////////////////////////////

class HomeCat extends Cat {
  constructor(diet, nick) {
    super();
    this.diet = [diet];
    this.nick = nick;
  }

  say(say) {
    console.log(say);
  }
}

const homecatRes = new HomeCat ();
console.log(homecatRes);

//////////////////////////////////////////////////////////

class WildCat extends HomeCat {
  constructor(canswim) {
    super();
    this.canswim = 'yes';
    this.wool = 'yes';
  }

  say(say) {
    console.log(say);
  }
}

const wildcatRes = new WildCat();
console.log(wildcatRes);