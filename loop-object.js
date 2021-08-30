const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};
//get property and values for in
for(const element in bottle){
    console.log(element,bottle[element]);
}
//get property and values using destructuring for of loop // advanced
for(const [key,values] of Object.entries(bottle)){
    console.log(key,values);
}
const keys = Object.keys(bottle);
// console.log(keys);
for (const prop of keys) {
    // console.log(prop, bottle[prop]);
}

// 
// const arr = ['color', 'jeans', 'tom']
// arr['color']