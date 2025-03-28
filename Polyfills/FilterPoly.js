// Returns the elements of an array that meet the condition specified in a callback function
// Filter takes a cb function and checks its condition with each element of arr
// Returns an array that specifies the condition in callback function
// arr.filter((val, index, arr))
let arr = [1,2,3,4,5,6,7,7,8]
// let a = arr.filter((i) => i < 4)
// console.log(a);

Array.prototype.filterPoly = function(callback){
    let resultArr = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) resultArr.push(this[i])
    }
    return resultArr
}

let a = arr.filterPoly((i) => i < 4)
console.log(a);