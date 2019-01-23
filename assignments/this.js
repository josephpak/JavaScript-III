/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global/Window Binding: 'this' will try to bind to the window unless we prevent it from doing so. When in the global scope, 'this' will be the window or console object
* 2. Implicit Binding: Whenever a method is invoked, the object to the left of the dot is bound to 'this'
* 3. Explicit Binding: Whenever call/apply are used, we can explicit bind this to an object
* 4. New Binding: When a constructor (object creator) function creates an object, 'this' is bound to the specific instance of the object that is created and returned
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const joe = {
    firstName: "Joe",
    lastName: "Pak",
    age: 27,
    location: 'NYC',
    hand: 'right-handed',
    getOlder: function(){
        this.age++;
    }
};
console.log(joe.age); // 27
joe.getOlder();
console.log(joe.age); // 28


// Principle 3

// code example for New Binding
function LambdaStudent(application){
    this.firstName = application.firstName;
    this.lastName = application.lastName;
    this.age = application.age;
    this.location = application.location;
    this.admitted = application.admitted;
}

const james = new LambdaStudent({
    firstName: "James",
    lastName: "Pak",
    age: 21,
    location: "Belmont",
    admitted: true
})

// console.log(james.location); // Belmont

// Principle 4

// code example for Explicit Binding

function congratulate(decision) {
    if (decision) {
        console.log(`Hi ${this.firstName}, welcome to Lambda School!`)
    }
}

congratulate.call(james, james.admitted) // Hi James, welcome to Lamba School!