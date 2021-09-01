const numbers = [20, 19, 30, 40];
const output2 = [];

// function doubleItOld(number) {
//     const result = number * 2;
//     return result;
// }

const doubleIt = number => number * 2;

for (const number of numbers) {
    const result = doubleIt(number);
    output2.push(result);
}
// console.log(output2);

// inside of map that's 3 point happend
// 1. loop through for each element
// 2.for each element call the provided function
// 3.result for each element will be stored in an array

// const output = numbers.map(doubleIt);

// const output = numbers.map(number => number * 2);
const output = numbers.map(x => x * 2);
console.log(output);

const square = numbers.map(x => x * x);
console.log(square);