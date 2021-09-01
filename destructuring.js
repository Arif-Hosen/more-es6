const fish = { id: 50, name: 'King Hilsha', price: 9000, phone: '0172355555', address: 'Chandpur', dress: 'Silver' };
// const phone = fish.phone;
// const id = fish.id;
// const address = fish.address;
// const price = fish.price;

const { phone, price, id, address } = fish;

console.log(phone, price);
console.log(phone);
console.log(phone, id);
console.log(phone);
console.log(phone, address);
console.log(phone, price);

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

// const work = company.web.work;
// const name = company.ceo.name;

const { work, framework } = company.web;
const { name, food } = company.ceo;
const { second, third } = company.web.tech;

console.log(work, framework, food, name);
console.log(second, third);