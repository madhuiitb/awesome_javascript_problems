'use strict';

// const Person = function (firstName, birthYear) {
//     //console.log(this);
//     // Instance properties
//     this.firstName = firstName;
//     this.birthYear = birthYear;

//     // Never create a method inside constructor. 
//     // because of we will create 100's of instances.
//     // this.calcAge = function () {
//     //     console.log(2037 - this.birthYear);
//     // }
// }

// const madhu = new Person('Madhu', 1994);
// console.log(madhu);

// // 1. New { } is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return {} 

// const vk = new Person('VK', 2022);
// const divya = new Person('Divya', 1996);
// console.log(vk, divya);

// console.log(madhu instanceof Person);

// Person.hey = function () {
//     console.log('Hey there!');
// }
// Person.hey();
// // madhu.hey(); it will not inherit hey method, to access hey method we can create using static

// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//     console.log(2037 - this.birthYear);
// }

// madhu.calcAge();
// vk.calcAge();
// divya.calcAge();
// console.log(madhu.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(madhu));
// console.log(Person.prototype.isPrototypeOf(vk));
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = 'Home sapiens';

// console.log(madhu.__proto__);
// console.log(madhu.__proto__.__proto__);
// console.log(madhu.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 2, 0, 4, 0, 2, 4, 5, 6];
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//  return [ ...new Set(this)];
// }
// console.log(arr.unique());
// const h1 = document.querySelector('h1');


// const Car = function (name,speed) {
//     this.name = name,
//     this.speed = speed;
// }

// Car.prototype.accelerate = function () {
//     this.speed = this.speed + 10;
//     console.log(`${this.name} goint at ${this.speed} km/h`);
// };

// Car.prototype.break = function () {
//     this.speed = this.speed - 5;
//     console.log(`${this.name} goint at ${this.speed} km/h`);
// }

// const car1 = new Car('BMW', 120)

// const car2 = new Car('TATA', 65);

// console.log(car1, car2);
// car1.accelerate();
// car1.accelerate();
// car1.break();

// car2.accelerate();
// car2.break()


// // class expression 
// // const PersonCl = class {}

// //class declaration
// class PersonCl {
//     constructor(fullName, year) {
//         this.fullName = fullName;
//         this.year = year;
//     }

//     // Methods will be added to .proptotype property.
//     calcAge() {
//         console.log(2037 - this.year);
//     }

//     greet() {
//         console.log(`Hey ${this.name}`);
//     }

//     get age() {
//         return 2037 - this.year;
//     }
//     set fullName(name) {
//         if (name.includes(' ')) this._fullName = name;
//         else alert(`${name} is not a full name!`)
//     }
//     get fullName() {
//         return this._fullName;
//     }

//     static hey() {
//         console.log('Hey there!');
//         console.log(this);
//     }
// }

// const jessica = new PersonCl('jessica raj', 1999);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);
// console.log(jessica.__proto__)
// console.log(jessica.__proto__===PersonCl.prototype)
// // PersonCl.prototype.greet = function () {
// //     console.log(`Hey ${this.name}`);
// // }

// jessica.greet();


// // 1. classes are NOT hoisted
// // 2. classes are fist-class citizens
// // 3. classess are executed in 'strict mode'


// // SETTERS & GETTERS

// const walter = new PersonCl('walter white', 1965);

// PersonCl.hey();

// const account = {
//     name:'madhu',
//     movements: [200, 100, 50, 120, 400],

//     get latest() {
//         return this.movements.slice(-1).pop();
//     },
//     set latest(now) {
//         this.movements.push(now);
//     },

// }

// console.log(account.latest); // when we want read a property
// account.latest = 150;
// console.log(account.movements)



// // Object.create

// const PersonProto = {
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     },
//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// }

// const stev = Object.create(PersonProto);
// console.log(stev);

// stev.name = 'Stev';
// stev.year = 1994;
// stev.calcAge();
// console.log(stev.__proto__);

// const sarah = Object.create(PersonProto);
// sarah.init('sarah', 1995);
// sarah.calcAge();

///////////////////////////////////////
// CHALLENGE 3
// class CarCl{
//     constructor(name, speed){
//         this.name = name;
//         this.speed = speed;
//     }
//     accelerate() {
//         this.speed = this.speed + 10;
//         console.log(`${this.name} goint at ${this.speed} km/h`);
//     }
//     break() {
//         this.speed = this.speed - 5;
//         console.log(`${this.name} goint at ${this.speed} km/h`);
//     }

//     get speedUS() {
//        this.speed= this.speed / 1.6;
//          console.log(`${this.name} goint at ${this.speed} mi/h`);
//         return this.speed ;
//     }

//     set speedUS(speed) {
//         this.speed = this.speed * 1.6;
//         console.log(`${this.name} goint at ${this.speed} km/h`);
//     }

// }


// const bmw = new CarCl('BMW', 120)

// const tata = new CarCl('TATA', 65);

// console.log(bmw, tata);
// bmw.accelerate();
// console.log(bmw.speedUS)


// const Person = function (firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;

// }

// Person.prototype.calcAge = function () {
//     console.log(2037 - this.birthYear);
// }


// const Student = function (firstName, birthYear,course) {
//     Person.call(this, firstName, birthYear);
//     this.course = course;
// }

// Student.prototype = Object.create(Person.prototype);

// // Student.prototype = Person.prototype;

// Student.prototype.introduce = function () {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
// }

// const mike = new Student('mike', 2000, 'CS');
// console.log(mike);
// mike.introduce();
// mike.calcAge()

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);
// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);


// const Car = function (make, speed) {
//     this.make = make;
//     this.speed = speed;
// }


// const EV = function (make, speed, chargeBattery) {
//     // this.make = make;
//     // this.speed = speed;
//     Car.call(this, make, speed);
//     this.chargeBattery = chargeBattery;
// }

// Car.prototype.accelerate = function () {
//     this.speed = this.speed + 20;
//     console.log(`${this.make} is going at speed ${this.speed} km/h`);
// }

// Car.prototype.break = function () {
//     this.speed = this.speed - 10;
//     console.log(`${this.make} is going at speed ${this.speed} km/h with battery charge ${this.chargeBattery} %`);
// }


// EV.prototype = Object.create(Car.prototype);

// EV.prototype.charge = function (chargeTo) {
//     this.charge = chargeTo;
// }

// EV.prototype.accelerate = function () {
//     this.speed = this.speed + 20;
//     this.chargeBattery = this.chargeBattery - 1;
//     console.log(`${this.make} is going at speed ${this.speed} km/h with battery charge ${this.chargeBattery} %`);
// }


// const tesla = new EV('Tesla', 120, 70);
// console.log(tesla);

// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.break();
// tesla.accelerate();
// tesla.accelerate();


//Inheritance between ES6 classes
// class PersonCl {
//     constructor(fullName, year) {
//         this.fullName = fullName;
//         this.year = year;
//     } 
//     // Methods will be added to .proptotype property.
//     calcAge() {
//         console.log(2037 - this.year);
//     }

//     greet() {
//         console.log(`Hey ${this.name}`);
//     }

//     get age() {
//         return 2037 - this.year;
//     }
//     set fullName(name) {
//         if (name.includes(' ')) this._fullName = name;
//         else alert(`${name} is not a full name!`)
//     }
//     get fullName() {
//         return this._fullName;
//     }

//     static hey() {
//         console.log('Hey there!');
//         console.log(this);
//     }
// }

// class StudentCl extends PersonCl {
//     constructor(fullName, year, course) {
//         //Always needs to happen first!
//         super(fullName, year);
//         this.course = course;
//     }
//     introduce() {
//         console.log(`My name is${this.fullName} and I study ${this.course}`)
//     }

//     calcAge() {
//         console.log(`Iam ${2037- this.year} and I study ${this.course}`)
//     }
// }
// const mad = new StudentCl('mad mad', 1994, 'CS');
// mad.introduce();
// mad.calcAge();
// console.log(mad);

// __________________________________
// __________________________________
//Inheritance between "Calsses": Object.create

// const PersonProto = {
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     },
//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// }

// const stev = Object.create(PersonProto);
// const StudentProto = Object.create(PersonProto);

// StudentProto.init = function (firstName, birthYear, course) {
//     PersonProto.init.call(this, firstName, birthYear);
//     this.course = course;
// }
// const jay = Object.create(StudentProto);
// jay.init('Jay', 1999, 'CSS')
// jay.calcAge();
// console.log(jay);


// class Account{
//     constructor(owner, currency, pin) {
//         this.owner = owner;
//         this.currency = currency;
//         this.pin = pin;
//         this.movements = [];
//         this.local = navigator.language;
//         console.log(`Thanks for opening an account, ${owner}`);
//     }
//     deposite(val) {
//         this.movements.push(val);
//     }
//     withdraw(val) {
//         this.deposite(-val);
//     }
//     appoveLoan(val) {
//         return true;
//     }
//     requestLoan(val) {
//         if (this.appoveLoan(val)) {
//             this.deposite(val);
//             console.log(`Loan approved`);
//         }
//     }
// }

// const acc1 = new Account('Madhu', 'INR', 1234);



// // acc1.movements.push(250);
// // acc1.movements.push(-50);

// acc1.deposite(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);
// console.log(acc1);
// console.log(acc1.pin);

/////////////////////////////////////////
// Encapsulation" Private class fields and Methods

// class Account {
//     local = navigator.language;
//     bank = 'Bankist';
//     #movements = [];
//     #pin;
//     constructor(owner, currency, pin) {
//         this.owner = owner;
//         this.currency = currency;
//         this.#pin = pin;
//         // this.movements = [];
//         // this.local = navigator.language;
//         console.log(`Thanks for opening an account, ${owner}`);
//     }

//     // Public interface (API)
//     getMovements() {
//         return this.#movements;
//     }
//     deposite(val) {
//         this.#movements.push(val);
//     }
//     withdraw(val) {
//         this.deposite(-val);
//     }
//     // Private Method which can't ACCESS from outside class.
//     #appoveLoan(val) {
//         return true;
//     }
//     requestLoan(val) {
//         if (this.#appoveLoan(val)) {
//             this.deposite(val);
//             console.log(`Loan approved`);
//         }
//     }

//     static test() {
//         console.log("TEST")
//         return true;
//     }
// }

// const acc1 = new Account('Madhu', 'INR', 1234);
// acc1.deposite(300);
// acc1.withdraw(140);
// acc1.movements = [];
// console.log(acc1);
// console.log(acc1.#movements) private field
// console.log(acc1.#pin); private field
// console.log(acc1.#approveLoan(100)); // Private methods

// Account.test();
// acc1.test();

/////////////////////////////////////////
// Chain of Methods

// class Account {
//     local = navigator.language;
//     bank = 'Bankist';
//     #movements = [];
//     #pin;
//     constructor(owner, currency, pin) {
//         this.owner = owner;
//         this.currency = currency;
//         this.#pin = pin;
//         // this.movements = [];
//         // this.local = navigator.language;
//         console.log(`Thanks for opening an account, ${owner}`);
//     }

//     // Public interface (API)
//     getMovements() {
//         return this.#movements;
//         // It can not chainable in betweenc
//     }
//     deposite(val) {
//         this.#movements.push(val);
//         return this;
//     }
//     withdraw(val) {
//         this.deposite(-val);
//         return this;
//     }
//     // Private Method which can't ACCESS from outside class.
//     #appoveLoan(val) {
//         return true;


//     }
//     requestLoan(val) {
//         if (this.#appoveLoan(val)) {
//             this.deposite(val);
//             console.log(`Loan approved`);
//         }
//         return this;
//     }

//     static test() {
//         console.log("TEST")
//         return true;
//     }
// }

// const acc1 = new Account('Madhu', 'INR', 1234);
// const movements = acc1.deposite(300).withdraw(100).withdraw(50).requestLoan(24000).withdraw(4000).getMovements();

// console.log(acc1, movements);


///////////////////////////////////
// CHALLENGE 4

class CarCl{
    constructor(name, speed){
        this.name = name;
        this.speed = speed;
    }
    accelerate() {
        this.speed = this.speed + 10;
        console.log(`${this.name} goint at ${this.speed} km/h`);
        // return this;
    }
    break() {
        this.speed = this.speed - 5;
        console.log(`${this.name} goint at ${this.speed} km/h`);
        return this;
    }

    get speedUS() {
       this.speed= this.speed / 1.6;
         console.log(`${this.name} goint at ${this.speed} mi/h`);
        return this.speed ;
    }

    set speedUS(speed) {
        this.speed = this.speed * 1.6;
        console.log(`${this.name} goint at ${this.speed} km/h`);
    }
}

class EVCL extends CarCl{
    #charge;
    constructor(name, speed, charge) {
        super(name, speed);
        this.#charge = charge;
    }
    charge(chargeTo) {
        this.#charge = chargeTo;
        return this;
    }
    accelerate() {
        this.speed = this.speed + 20;
        this.#charge--;
        console.log(`${this.name} goint at ${this.speed} km/h with charge ${this.#charge}`);
        return this;
    }
}

const tata = new EVCL('Tata', 120, 60);
console.log(tata);
const moving = tata.accelerate().accelerate().accelerate().charge(50).break().accelerate();

console.log(moving);