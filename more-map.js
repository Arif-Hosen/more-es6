const friends = ['Tom Brand', ' Tom Cruise', 'Tom Kashem', 'Tom solaiman'];
const fLength = friends.map(friend => friend.length);
console.log(fLength);

const products = [
    { name: 'water bottle', price: 20, color: 'yellow' },
    { name: 'mobile', price: 12000, color: 'black' },
    { name: 'bag', price: 120, color: 'blue' },
    { name: 'watch', price: 3000, color: 'black' },

]
const productName = products.map(product => product.name);
const productPrice = products.map(product => product.price);

// products.map(product => console.log(product));
products.forEach(product => console.log(product));
// console.log(productPrice);