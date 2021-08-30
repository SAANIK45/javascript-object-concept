//using object literal
//simple object declare
const student  = {
    name: 'Tamim Ahmed',
    job:'cricketer'
};
//create a object using new method and object constructor
const person = new Object();
console.log(person);
//create an object and inherit from other object that is called inheritance
const human = Object.create(student);
console.log(human.job);
//create class
class People{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
//create a class based object 
const employee = new People('Hasan',23);
console.log(employee);
// 5. function
function Manus(name) {
    this.name = name;
}
const man = new Manus('kader');
console.log(man);