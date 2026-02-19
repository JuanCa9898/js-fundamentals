function findLargestNumber(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

let numbers = [100, 2, 45, 67, 3];
//console.log(findLargestNumber(numbers));

function getFirst(arr) {
    return arr[0];
}

//console.log(getFirst([10, 20, 30]));

function findSmallestNumber(arr) {
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}
let numbers1 = [5, 12, 3, 20, 8];
//console.log(findSmallestNumber(numbers1));

function sumArray(arr) {
    let total = 0;
    for (let i =0 ; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
let numbers2 = [1, 2, 3, 4, 5];
//console.log(sumArray(numbers2));

function countEvens(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            count++;
        }
    }
    return count;
}
let numbers3 = [1, 2, 3, 4, 6, 7, 8];
//console.log(countEvens(numbers3));

function printReverse(arr) {
for (let i = arr.length -1; i >= 0; i--) {
    console.log(arr[i]);
}
}
let numbers4 = [1, 2, 3, 4, 5];
//printReverse(numbers4);

//Objects

let person = {
    firstName : "Juan",
    lastName : "Restrepo",
    age : 27,
    profession : "Engineer"
}

person.age = 28;
person.country = "Colombia";

//console.log(person);

function describePerson (person) {
    return person.firstName + " is " + person.age + " years old.";
}

//console.log(describePerson(person));

let students = [
    { name: "Ana", score: 90 },
    { name: "Luis", score: 75 },
    { name: "Maria", score: 95 }
];

//for (let i = 0; i < students.length; i++) {
//    console.log(students[i].name + " scored " + students[i].score);
//}

function findTopStudent(students) {
    let topStudent = students[0];
    for (let i = 0; i < students.length; i++) {
        if (students[i].score > topStudent.score) {
            topStudent = students[i];
        }
    }
    return "The top student is " +topStudent.name + " with a score of " + topStudent.score;
}

console.log(findTopStudent(students));