// Before ES13 
// Declare private members is not possible, a undescore 
// was prefixed to indicate that it was meant to be privated, 
// but it could still be accessed and modified from outside of the class


// class Person {
//   _firstName = 'Joseph'
//   _lastName = 'Harris'
// 
//   get name() {
//     return `${this._firstName} ${this._lastName}`
//   }
// }
// 
// 
// const person = new Person()
// console.log(person.name) // Joseph Harris
// 
// 
// // Members inteded to be private can still be accessed
// // from outside the class
// 
// console.log(person._firstName) // Joseph
// console.log(person._lastName)  // Harris
// 
// // They can also be modified
// person._firstName = 'Rogéria'
// person._lastName = 'Becker'
// 
// console.log(person.name) // Rogéria Becker


// After ES13
// Trying access them from outside the class will cause an syntax error, which happens at compile time

class Person {
  #firstName = 'Joseph'
  #lastName = 'Harris'

  get name() {
    return `${this.#firstName} ${this.#lastName}`
  }
}

const person = new Person()
console.log(person.name)

// SyntaxError: Private field '#fieldName' must be
// declared in an enclosing class

// console.log(person.#firstName)
// console.log(person.#lastName)