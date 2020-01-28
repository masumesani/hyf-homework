// full name function
// function getFullname(firstname, surename) {
//     let fullname = `${firstname} ${surename}`
//     return fullname
// }

// formal name
//Formal fullname
function getFullname(firstname, surename, useFormalName) {
    if (useFormalName) {
        let displayFormalName = `Dear ${firstname} ${surename}`
        return displayFormalName;
    } else {

        let displayFullName = `${firstname} ${surename}`
        return displayFullName;
    }
}

let fullname1 = getFullname("Masi", "Sani");
let fullname2 = getFullname("Morteza", "Kasravi");

console.log(fullname1);
console.log(fullname2);

fullname1 = getFullname("Masi", "Sani", true);
fullname2 = getFullname("Morteza", "Kasravi",true);

console.log(fullname1);
console.log(fullname2);