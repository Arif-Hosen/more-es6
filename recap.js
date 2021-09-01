//1 let & const
const hubby = 'Sadik';
let phone = 'Iphone';
phone = 'samsaung';

//2 default farameter
function calculate(num1, num2 = 0) {
    const sum = num1 + num2;
    return sum;
}
const result = calculate(10);
console.log(result);

//3 template string
const myNotes = `My hubby is ${hubby}.I have a ${phone}`;
console.log(myNotes);

//4 arrow function
const mathSquare = x => {
    const result = x * x;
    const result2 = x + 10;
    return result2;
}
console.log(mathSquare(5));

//5 spread operator
const array = [20, 40, 33, 90];
const max = Math.max(...array);
console.log(max);