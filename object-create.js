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

