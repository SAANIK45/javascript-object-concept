//objects compare
const a = {
    a:'1',
    b:'2'
}
const b = {
    b:'2',
    a:1
}
/* if( a == b){
    console.log('matched');
}else{
    console.log('unmatched');
} */
//this is not proper solution if position is changed of property then it is not working

// if( JSON.stringify(a) === JSON.stringify(b)){
//     console.log('matched');
// }else{
//     console.log('unmatched');
// }
//compare objects 
function compareObject(obj1,obj2){
    if(Object.keys(obj1).length !== Object.keys(obj2).length){
        return false;
    }
    for(const element in obj1){
        if(obj1[element] !== obj2[element]){
            return false;
        }else{
            return true;
        }
    }
}
const isResult = compareObject(a,b);
console.log(isResult);


const first = { a: 1, b: 2 };
const second = { a: 1, b: 2 };
const third = first;

if (first === third) {
    // console.log('objects are equal');
}
else {
    // console.log('Objects are different');
}


const first2 = { a: 1, b: 2, c: 2 };
const second2 = { b: 2, a: 1 };
console.log(JSON.stringify(first2));
console.log(JSON.stringify(second2));
if (JSON.stringify(first2) === JSON.stringify(second2)) {
    // console.log('objects are equal')
}

function compareObjects(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            return false;
        }
    }
    return true;
}

const isEqual = compareObjects(first2, second2);
console.log(isEqual);