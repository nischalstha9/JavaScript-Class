// - accpet marks in 5 and calculate total and percentage

let marks = [56, 82, 39, 74, 65];
var total = 0;
for (let i = 0; i < marks.length; i++) {
    total += marks[i];
}
let percentage = total / 500 * 100;
console.log("Total = ", total);
console.log("Percentage = ", percentage, "%");