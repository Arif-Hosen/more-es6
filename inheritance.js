class TeamMember {
    name;
    address = 'BD';
    designation = 'Spport web dev';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMember {
    groupSuppotrtTime;
    constructor(name, address, time) {
        super(name, address);
        this.groupSuppotrtTime = time;
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'Start support session');
    }
}


class StudentCare extends TeamMember {
    designation = 'Student care'
    buildARoutine(student) {
        console.log(this.name, 'Build a routine for', student);
    }
}


class naptuneApp extends TeamMember {
    codeEditor;
    designation = 'Android app dev'
    constructor(name, address, codeEditor) {
        super(name, address);
        this.name = name;
        this.address = address;
        this.codeEditor = codeEditor;
    }
    naptune(version) {
        console.log(this.name, 'Naptune app version', version);
    }
}

const salman = new Support('Solaiman Khan', 'Dubai', 10);
const alia = new StudentCare('Alia', 'Mumbai');
const arif = new naptuneApp('Arif', 'BD', 'vsCode')
arif.naptune('2.4.3')
console.log(arif);
