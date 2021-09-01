class Support {
    name;
    address = 'BD';
    designation = 'Spport web dev';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'Start support session');
    }
}
const amir = new Support('Amir Khan', 'BD');
const salman = new Support('Solaiman Khan', 'Dubai');
const saruk = new Support('Saruk khan', 'India');
const akshy = new Support('Akshay Kumar', 'India');
amir.startSession();
salman.startSession();
console.log(amir, salman, saruk, akshy);
console.log(salman);