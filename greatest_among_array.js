let nums = [1, 2, 3, 4, 5, 55, 12, 45, 67, 988, 1000];
// for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//         if (nums[i] > nums[j]) {
//             let temp = nums[i];
//             nums[i] = nums[j];
//             nums[j] = temp;
//         }
//     }
// }

nums.sort((a, b) => {
  parseInt(a) - parseInt(b);
});
console.log(`The smallest number is ${nums[0]}`);
console.log(`The greatest number is ${nums[nums.length - 1]}`);
