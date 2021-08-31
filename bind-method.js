  
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
kibria.treatDey(300);
kibria.treatDey(600);

//get the property method(function) from another object
const balamTreat = kibria.treatDey.bind(balam);
const kalamTreat = kibria.treatDey.bind(kalam);
balamTreat(500);
balamTreat(700);

kalamTreat(300);