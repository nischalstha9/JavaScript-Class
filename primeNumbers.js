const isPrime = (num) => {
  let flag = true;
  for (i = 2; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) {
      flag = false;
      break;
    }
  }
  return flag;
};

for (let j = 1; j < 50; j++) {
  if (isPrime(j)) {
    console.log(j);
  }
}
