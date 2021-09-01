// delare variable based on the name of an object property
const myObject = { x: 20, y: 40, a: 79, b: 90 };
const { x, b } = myObject;
console.log(x, b);

//destructuring array
const [m, n, o] = [30, 40, 67, 90];
console.log(m, n, o);

const [best, faltu] = ['momtaj', 'porsi'];
console.log(best, faltu);


const { sky, color } = { sky: 'blue', soli: 'matti', color: 'red' };
console.log(sky, color);

//chaining
const company = {
    name: 'GP',
    // property can be an object
    ceo: {
        id: 5,
        name: 'Arman',
        food: 'fuska'
    },
    web: {
        work: 'web development',
        employee: 20,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    },
};

console.log(company?.web?.tech?.third);
console.log(company?.backend?.atech.tthird);