//A) .FIND METHOD: allows you search for the first element in an array that satisfies a proividing test function
//REAL LIFE IMPLEMENTATION
//1) finding a specific user in a database

const users = [
  { id: 1, name: "jerry" },
  { id: 2, name: "tope" },
  { id: 3, name: "austine" },
];

const userId = 2;

const foundUser = users.find((user) => user.id === userId);
console.log(foundUser);

//B) FINDINDEX METHOD: returns the index of the first element in the array that satisfies the provided testing function, if no element is found or satisfies the condition it returns -1
//REAL LIFE IMPLEMENTATION
//1) find the index of the student with a spoecific name
const students = [
  { id: 1, name: "jerry" },
  { id: 2, name: "tope" },
  { id: 3, name: "austine" },
];

const studentName = "jerry";

const index = students.findIndex((student) => student.name === studentName);

if (index !== -1) {
  console.log(` student ${studentName} found at index ${index}`);
} else {
  console.log(` student ${studentName} not found`);
}

// can also be used to remove or update an element in an array
const numbers = [ 10, 20, 30, 40]
const targetNumber = 30;
const index = numbers.findIndex((number) => number === targetNumber);
if ( index !== -1) {
    console.log( `number ${targetNumber} found at index ${index}`)
    numbers.splice(index, 1);
    console.log(numbers)
} else {
    console.log(` number ${targetNumber} not found`)
}
