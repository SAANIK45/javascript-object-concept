  
const student = {
    //object property
    id: 101,
    money: 6000,
    name: 'RJ Kibria',
    major: 'mathematics',
    isRich: false,
    subjects: ['english', 'economics', 'math 101', 'calculus'],
    bestFriend: {
        name: 'kundu',
        major: 'mathematics'
    },
    //if you use function in a object that is called method
    takeExam: function () {
        console.log(this.name, 'taking exam');
    },
    treatDey: function (expense, boksis) {
        this.money = this.money - expense - boksis;
        return this.money;
    },
    treatDey2 : function(){
        const sub = this.subjects;
        for(const element of sub){
            console.log(element);
        }
    }

}
student.treatDey2();
const remain = student.treatDey(1000,100);
console.log(remain);
console.log(student.bestFriend.major);

