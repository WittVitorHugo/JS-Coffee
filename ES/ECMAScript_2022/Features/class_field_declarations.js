
// Before ES13
// Class fields could only be declared in the constructor

// class Car {
//   constructor() {
//     this.brand = 'VW'
//     this.model = 'Gol'
//     this.year = 1999
//   }
// }
// 
// 
// const car = new Car()
// 
// console.log(car.brand)
// console.log(car.model)
// console.log(car.year)



// After ES13
// Constructor is not necessary to declare class fields

class Car {
  brand = 'GM'
  model = 'Caravam'
  year = 91
}

const car = new Car()

console.log(car.brand)
console.log(car.model)
console.log(car.year)
