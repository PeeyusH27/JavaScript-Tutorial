//MAP VS FOREACH

const arr = [2, 5, 3, 4, 7]

let a = arr.map((i) => i * 2) // RETURNS NEW ARR
console.log(a);
console.log(`Original arr: ${arr}`);
let b = arr.forEach((i, idx) => arr[idx] = i + 3) //MODIFIES THE ORIGINAL ARR
console.log(b);
console.log(`Original arr: ${arr}`);