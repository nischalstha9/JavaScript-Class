const add = (...args) => {
  return args.reduce((a, b) => {
    return a + b;
  });
};

function addOldWay() {
  let sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(add(1, 2));
console.log(add(1, 2, 3));
console.log(addOldWay(1, 2));
console.log(addOldWay(1, 2, 3));
