// const obj1 = {'key1': 1}

// const obj2 = { ...obj1}

// if(obj2 === obj1){
// console.log('same objects')
// }
// else{
// console.log('different objects')
// }
// the result is different objects because if we can can see that 
// these are reference types which points towards a location which are 
// different in these cases.

const obj1 = {'key1': 1 , 'key2' : 2}
const obj2 = { ...obj1, key1: 1000}
console.log(obj1)
console.log(obj2)

// the output will be 
// { key1: 1, key2: 2 }
// { key1: 1000, key2: 2 }
// because the rest operator will basically copy the values from the 
// obj1 and paste in obj2, so no change in obj1 . after that , the 
// new key2 entry will be replaced.

