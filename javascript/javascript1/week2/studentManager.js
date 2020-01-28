const class07Students = [];
function addStudentToClass(studentName) {
    
    if(studentName === "") {
        return `Please provide the student name`
    }

    if (class07Students.includes(studentName.toLowerCase()) == true) {
        return `Student ${studentName} is already in the class`
    }

    if (studentName.toLowerCase() === "queen") {
        class07Students.push(studentName.toLowerCase());
        return `Queen has gracefully been added to the class`
    }
    else if (class07Students.length < 7) {
        class07Students.push(studentName.toLowerCase());
        return `Student ${studentName} has been added to the class`
        
    } else {
        return "Cannot add more students to class 07";
    }

}

function getNumberOfStudents() {
    return class07Students.length
}

console.log(addStudentToClass('Masi'));
console.log(addStudentToClass('Masi'));
console.log(addStudentToClass(''));
console.log(addStudentToClass('Tom'));
console.log(addStudentToClass('Jerry'));
console.log(`Now we have ${getNumberOfStudents()} student(s) in our class`);
console.log(addStudentToClass('Pat'));
console.log(addStudentToClass('Mat'));
console.log(addStudentToClass('Rick'));
console.log(addStudentToClass('Morty'));
console.log(addStudentToClass('King'));
console.log(addStudentToClass('Queen'));
console.log(`Now we have ${getNumberOfStudents()} student(s) in our class`);
