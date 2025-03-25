//Reduce((cb) => {condition}, Initial)
// cb() = (acc, current, initial, arr)
// Reduces Array to SINGLE ELEMENT

const nums = [1, 2, 3, 4, 5, 6]
let sumofarray = nums.reduce((acc, current) => acc + current, 0)
console.log(sumofarray);

//POLYFILL
Array.prototype.myReduce = function (cb, initial) {
    var accumulator = initial;
    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i]
    }
    return accumulator
}

let redarray = nums.myReduce((acc, current) => acc + current, 0)
console.log('Polyfill:', redarray);