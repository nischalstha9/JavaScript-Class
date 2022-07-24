let res = (function add(...args) {
  return args.reduce((a, b) => {
    return a + b;
  });
})(1, 2, 3);
console.log(res);

let rest = ((a) => {
  console.log(a);
})(123);
