// Takes each element and applies condition to them,
// Return only those element that satisfy the condition

const nums = [1,2,3,4,5,6,7,8]
let morethan5 = nums.filter((i) => i > 5 )
console.log(morethan5);

//POLYFILL
Array.prototype.myFilter = function(cb){
    let temp = []
    for(let i = 0; i < this.length; i++){
        if(cb(this[i], i , this)) temp.push(this[i])
        }
    return temp
}

let morethan4 = nums.myFilter((i) => i > 4 )
console.log(morethan4);