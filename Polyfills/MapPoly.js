// Map is a cb function that that takes a function as ARG
// returns an array by implementing the function on all of the elements in the array
// arr.map((item, index, arr) => {})

let arr = [1,2,3,4,5]
// let a = arr.map((i) => i * 4)
// console.log(a);

Array.prototype.mapPoly = function(cb){
    let resultArr = []
    for (let i = 0; i < this.length; i++) { //We are using THIS to specify that resultArr is the array given to use map on.
        resultArr.push(cb(this[i], i, resultArr))
    }
    return resultArr;
}

let a = arr.mapPoly((i) => i * 4)
console.log(a);