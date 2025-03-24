//Reduce((cb) => {condition}, Initial)
// cb() = (acc, current, initial, arr)
// Reduces Array to SINGLE ELEMENT

const nums = [1,2,3,4,5,6]
let sumofarray = nums.reduce((acc, current) => acc + current, 0)
console.log(sumofarray);