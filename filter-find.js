const numbers = [29, 70, 12, 9, 30, 8];
const bigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(number => number < 20);

const products = [
    { name: 'water bottle', price: 20, color: 'yellow' },
    { name: 'mobile', price: 12000, color: 'black' },
    { name: 'bag', price: 120, color: 'blue' },
    { name: 'watch', price: 3000, color: 'black' },
]
const expensive = products.filter(product => product.price > 200);
const blacks = products.filter(product => product.color == 'black');
const bags = products.filter(product => product.name == 'bag');

const yellows = products.find(product => product.color == 'yellow');
console.log(yellows);