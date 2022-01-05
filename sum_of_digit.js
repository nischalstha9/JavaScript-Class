function getSum(num) {
    if (num > 0) {
        return (num % 10) + getSum(Math.floor(num / 10));
    }
    return 0;
}
var num = prompt("Enter a num:")
console.log(getSum(num));