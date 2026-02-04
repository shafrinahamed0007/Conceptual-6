function blenderMachine(fruit) {
  // your logic
  // console.log("I received", fruit, " to make " + fruit + " juice");
}

blenderMachine("Mango");

// let sum = num1 + num2;
// console.log(sum);

function checkEvenSumThenDoSomething(num1, num2) {
  let sum = num1 + num2;
  if (sum % 2 == 0) {
    // console.log("Yes! This is even number");
    // console.log("I do something");
  } else {
    // console.log("No! this is odd number");
    // console.log("I do nothing");
  }
}

checkEvenSumThenDoSomething(50, 100);
checkEvenSumThenDoSomething(50, 101);

function withOutParameter() {
  // console.log("I am function without parameter");
}

withOutParameter();

function sumTwoNumberAndMultiplyByFive(num1, num2) {
  let sum = num1 + num2;
  let result = sum * 5;
  if (result % 2 === 0) {
    return result;
  } else {
    return "Sorry! The outout is not a even number. Please try again.";
  }
}

const result = sumTwoNumberAndMultiplyByFive(2, 2);
const result1 = sumTwoNumberAndMultiplyByFive(10, 5);
// console.log(result);
// console.log(result1);

// param arr and obj

function sumArray(arr) {
  console.log(arr);
  let sum = 0;
  for (let number of arr) {
    sum = sum + number;
  }
  // console.log(sum);
  return sum;
}
let array = [10, 20, 30, 40, 50];
let sumOfArray = sumArray(array);
// console.log(array, "this array total sum: ", sumOfArray)

function countObjectProperty(objs) {
  let count = Object.keys(objs).length;
  console.log(count);
}

let obj = {name: "Utsho", age: 25, roll: 29, location:"Noakhali"};
let countObject = countObjectProperty(obj);

