//Reduce((callback(Prev, Curr, Index, Arr)))
// A function that accepts up to four arguments.
// The reduce method calls the callbackfn function one time for each element in the array.
// Array into Single Element
let arr = [1,2,3,4,5]
// let a = arr.reduce((acc, curr) => acc + curr)
// console.log(a);


//Reduce((callback(Prev, Curr, Index, Arr)))
// AnyArr          Function              Args
Array.prototype.reducePoly = function(callback, initial){
    //Initially reduced and initial value will be same
    //once we move to next element the rec=duced value will change acc to the condition that run on the next element
    let reduced = initial;
    for (let i = 0; i < this.length; i++) {
    // reduced(acc) = acc   callback(   acc, Current, idx, Array)
        reduced = reduced ? callback(reduced, this[i], i, this) : this[i]
    }
    return reduced
}



let a = arr.reducePoly((acc, curr) => acc + curr)
console.log(a);