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

let nums = [1, 2, 3, 4, 5, 55, 12, 45, 67, 988, 1000];
console.log(nums.reduce((a, b) => a + b));
console.log(
  nums.filter((num) => {
    return num % 2 == 0;
  })
);
console.log(
  nums.map((num) => {
    return num * 2;
  })
);
console.log(
  `The smallest number is ${
    nums.sort((a, b) => {
      parseInt(a) - parseInt(b);
    })[0]
  }`
);
console.log(`The greatest number is ${nums[nums.length - 1]}`);

const text = ["nischal", "is", "a", "boy"];
text.newJoin = function (operator) {
  return text.reduce((a, b) => a + operator + b);
};
console.log(text.newJoin(" baby "));
console.log(text.reduce((a, b) => a + b));
