// A) FOR EACH METHOD: doesnt return an array
// executes a provided function once for each array element, iterate over an array and performs an operation on each element in the array
const fruits = ["apple", "banana", "mango"];
// takes the current/each element and index of the current element
fruits.forEach((fruit, index) => {
  console.log(`fruit at index ${index}: ${fruit}`);
});

// REAL WORLD IMPLEMENTATION

// 1) SHOPPING CART: Iterate over a shopping cart array and calculate the total cost of all items
// initializes an array of cart that contains objects with a name and a price
// const cart = [
//   { name: "name 1", price: 10.99 },
//   { name: "name 2", price: 5.99 },
//   { name: "name 3", price: 7.99 },
// ];

// this total variable is initialized to 0, which will be used to store the total cost of items in the cart
// let total = 0;
//this iterates over each element in the cart array,takes a parameter of the current element in the array(item)
// cart.forEach((item) => {
//   // this adds the price of the current item to the total variable and the += operator is used to accumulate the prices of all items
//   total += item.price;
// });
// console.log(` Total: $${total.toFixed(2)}`);

// // 2) USER MANAGEMENT
// //Iterate over an array of users and perform actions such as sending emails or updating users data
// const users = [
//   { name: "jerry", email: "bowoto47@gmail.com" },
//   { name: "tope", email: "vazzle333@gmail.com" },
//   { name: "austine", email: "devygramm@gmail.com" },
// ];

// users.forEach((user) => {
//   // send email to each user
//   console.log(`sending email to ${user.email}`);
// });

// users.forEach((user) => 
//   // send email to each user
//   console.log(`sending email to ${user.email}`)
// );
// B) MAP METHOD: returns a new array
//allows you to create a new array method by transforming each element in an exisiting array, so it iterates over each element in an array , applies a specified function to each element , returns a new array containing the transformed element
//REAL WORLD IMPLEMENTATION

// 1)   array of objects representing employees and i want to extract their names and format them in uppercase, transforming data
// const employeees = [
//   { id: 1, name: "jerry" },
//   { id: 2, name: "tope" },
//   { id: 3, name: "austine" },
// ];

// const formattedEmployeesName = employees.map((employee) =>
//   employee.name.toLocaleUpperCase()
// );
// console.log(formattedEmployeesName);

// //2) extracting specific data from users array
// const Users = [
//   { id: 1, name: "jerry", email: "bowoto1@gmail.com" },
//   { id: 2, name: "tope", email: "bowoto2@gmail.com" },
//   { id: 3, name: "austine", email: "bowoto3@gmail.com" },
// ];

// const userEmails = users.map((user) => user.email);
// console.log(userEmails);

// // 3) calculating totals
// const orders = [
//   { id: 1, total: 100 },
//   { id: 2, total: 200 },
//   { id: 1, total: 300 },
// ];

// const totalOrders = orders.map((order) => order.total * 0.9);// calculating orders with 10% discount
// console.log(totalOrders);

// //4)data formatting
// const dates = [ '2025-08-24', '2024-09-23'];
// const formattedDates = dates.map((date) => {
//   const [ year, month, day ] = date.split( '-');
//   return `${month}/${day}/${year}`;
// })
// console.log(formattedDates);


//C) FILTER METHOD : returns a new array, filter out irrelevant data from a dataset
//Creates a new array with all elements that past a test implemented by a provided function, filter iterates over each element in an array, applies a specified function to each element, returns a new array containing only the elements that pass the test

//REAL LIFE IMPLEMENTATION

//1) get list of employees who are older than 30
const employees = [
  { id: 1, name: "jerry", age: 43 },
  { id: 2, name: "tope", age: 30 },
  { id: 3, name: "austine", age: 14 },
];

const olderEmployees = employees.filter((employee) => employee.age > 30);
console.log(olderEmployees)


//2) filter products by price 
const products = [
  { id: 1, name: "product 1", price: 10 },
  { id: 2, name: "product 2", price: 2 },
  { id: 3, name: "product 3", price: 30 },
];

const affordableProducts = products.filter((product) => product.price < 10);
console.log(affordableProducts)

//3) validating that each user has a valid email and address and password that meets certain criteria(min length of 8 characters)
const newUsers = [
  { id: 1, email: "bowoto47@gmailcom", password: "uuyytuuyyyhhh" },
  { id: 2, email: "bowoto47@gmail.com", password: "uuyyt123456333333" },
  { id: 3, email: "bowoto47", password: "uu"},
];

const validUsers = newUsers.filter((newUser) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^.{8,}$/;
  // checks and filter if email and password meets required format
  return emailRegex.test(newUser.email) && passwordRegex.test(newUser.password);
});
console.log(validUsers);


// D) REDUCE METHOD: reduce and array to a single value,Allows you to accummulate value by iterating over an array, used for data aggregation, data grouping and flatening an array
//  it iterates over each element in an array , applies a specified function to each element, accummulating a value, returns the final accummulated value, calculates aggregate values
// REAL LIFE IMPLEMENTATION
//1) calculate the total cost of all items in a shopping cart
const carts = [
  { id: 1, price: 10.99 },
  { id: 2, price: 5.99 },
  { id: 3, price: 7.99 },
];

const totalCost =carts.reduce((accumulator, item) => accumulator + item.price, 0);
console.log(totalCost);

// grouping users by age 
// initializes an array that contains three objects , each representing a user ith id, name and age 
const ageGroup = [
  { id: 1, name: "jerry", age: 30 },
  { id: 2, name: "tope", age: 30 },
  { id: 3, name: "austine", age: 14 },
];

//2) uses the reduce method to group users by age property, it takes 2 parameters , acc: the accumulator obj,initially an empty object and curr: the current user object being processed
const groupedUsers = ageGroup.reduce((acc, curr) => {
  // this line checks if the acc object already has a property with the key curr.age
  if(!acc[curr.age]) {
    //if it doesnt this line then creates a new property with the key curr.age and initializes it into an empty array
    acc[curr.age] = [];
  }
  //this line then adds the current user object curr to the array of users with the same age property.
  acc[curr.age].push(curr)
  // this line returns the updated acc object after processing the current user
  return acc
}, {});// this empty object sts the initial value of the acc object to an empty object
console.log(groupedUsers);

//3) flattening an array
const arrays = [[1,2], [3,4], [5,6]];

const flattenedArray = arrays.reduce((acc, curr) => acc.concat(curr), []);
console.log(flattenedArray)