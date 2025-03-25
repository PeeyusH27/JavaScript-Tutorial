// Map((element, index, array) => {})
// //Create new array from existing one by applying some function to each element
// RETURNS NEW ARRAY
const nums = [1,2,3,4,5,6]

let a = nums.map((i) => i * 2) // take each i(item) of nums array and multiply by 2
console.log(a);

//POLYFILL
Array.prototype.myMap = function(cb){
    let temp = [];
    for(let i = 0; i < this.length; i++){
        temp.push(cb(this[i], i, this))
    }
    return temp;
}

let b = nums.myMap((i) => i * 2)
console.log("from polyfill:", b);
