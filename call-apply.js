//parent object 
const kibria = {
    //object property
    id: 101,
    money: 6000,
    name: 'RJ Kibria',
    major: 'mathematics',
    //if you use function in a object that is called method
    treatDey: function (expense) {
        this.money = this.money - expense;
        console.log(this);
        return this.money;
    }
}
const balam = {
        //object property
        id: 104,
        money: 9000,
        name: 'RJ Kibria',
        major: 'mathematics'
}
const kalam = {
        //object property
        id: 103,
        money: 4000,
        name: 'RJ Kibria',
        major: 'mathematics'
}

//using call for get the function from another object
kibria.treatDey.call(balam,600);
kibria.treatDey.call(kalam,500);
//using apply for get the function from another object when using apply function arguments are called by an array 
kibria.treatDey.apply(balam,[500]);