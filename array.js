let shoppingList = ["apple", "orange", "wheat"];
let marks = [20, 30, 40, 50];
let collection = [12, "dog", true, null, NaN];

const cars = new Array("BMW", "Nissan", "Toyota");
cars[0] = "Audi";

// cars.forEach(car => {
//     console.log(car);
// });

// cars.map(car => {
//     console.log(car);
//     //auto returns
// })

//array length
console.log(cars.length);

//removing first item
console.log(cars);
const removedCar = cars.pop();
console.log(removedCar);
console.log(cars);

//removing first item
cars.shift();
console.log(cars);

//adding items to last
cars.push("Lambo");
console.log(cars);

//adding items to first
cars.unshift("Mc Laren");
console.log(cars);