// let object = { name: "morteza", age: 33, girth: 10 };
// // retun an objet with two property name & girth
// function mortezaFun(morObject) {
//     let result = {name: morObject.name, girth: morObject.girth};
    
//     return result
// }
// let newObj1=mortezaFun(object)

// console.log(newObj1)
// // console.log(mortezaFun(object));
// console.log(object)
// ////
// function mortezaFunc(newobject, value){
//     newobject.happiness = value;
//     return newobject
// }
// let newObj = mortezaFunc(object, "10")

// console.log(newObj)

// console.log(object)


let arr = ["a","b","c","d"]
//let arr2 = ["aaa","bbb","ccc","ddd"]

let res = arr.reduce(cb,{})

function cb(previousValue, currentValue, index){
    let key = index;
    previousValue[key]=currentValue;
    return previousValue;
}

console.log(res)

res = {
    0:"a",
    1:"b",
    2:"c",
    3:"d"
}

res[3]="c"