const square = x => x * x;
console.log(square(9));

const user = {
    name: 'Jeremiah',
    // there is no this binding with arrow functions
    // Arguments variable in console.log will print out unexpected results

    sayHi: () => {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`)
    },

    // this binding and arguments variable has the expected behaviour
    sayHiAlt() {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`)
    }
};

user.sayHiAlt(1, 2, 3);