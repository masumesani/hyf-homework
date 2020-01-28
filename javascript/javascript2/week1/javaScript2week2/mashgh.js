//write function cb so...
[1, 2, 3].forEach(cb) //console logs 1 and 2 and 3
let cb = element => console.log(element);
[1, 2, 3].forEach(element => console.log(element));
/////////
let res = [1, 2, 3, 4].filter(cb)/// res = [2] 
let cb = value => value !== 2;
[1, 2, 3, 4].filter(value = value !== 2)
/////////
let resn = [1, 2, 3, 4, 5].filter(cbn)/// resn[3, 4, 5]
let cbn = value => value < 3;
[1, 2, 3, 4, 5].filter(value => value < 3)
/////
let resn = [1, 2, 3, 4, 5].map(pick)// resn ['morteza', 'masume', 'morteza', 'masume','morteza']
let pick = value => {
    if (value % 2 === 0) {
        return "masume"
    } else {
        return "morteza"
    }
}
resn = [1, 2, 3, 4, 5].map(pick = value => {
    if (value % 2 === 0) {
        return "masume"
    } else {
        return "morteza"
    }
})

//////
let resn = [1, 2, 3, 4, 5].map(mul)// resn [2, 4, 6, 8, 10]
let mul = value => value * 2;
[1, 2, 3, 4, 5].map(value => value * 2)
/////

[{ name: "morteza", age: "javan" }, { name: "masume", age: "javantar" }].map(calNam)// resnxa = ["morteza", "masume"]
let calNam = value => value.name;
[{ name: "morteza", age: "javan" }, { name: "masume", age: "javantar" }].map(value => value.name);


let object = { name: "morteza", age: 33, girth: 10 };
// retun an objet with two property name & girth
function mortezaFun(morObject) {
    let result = {name: morObject.name, girth: morObject.girth};
    
    return result
}
console.log(mortezaFun(object));

////
function mortezaFunc(newobject, value){
    newobject.happiness = value;
    return newobject
}
console.log(moetezaFunc(object, "10"))


function taq(obj){
    return obj
}

addd(object)