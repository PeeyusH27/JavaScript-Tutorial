//Implement caching/memoise function

function memoize(fn, context){
    const res = {};
    return function(...args){
        var argsCache = JSON.stringify(args)
        if(!res[argsCache]){
            res[argsCache] = fn.call(context || this, ...args)
        }
            return res[argsCache]
    }
}

const clumsySquare = (num1, num2) => {
    for(let i = 1; i <= 100000000; i++){}
    return num1 * num2
}

const memoizedSquare = memoize(clumsySquare)
console.time("First Call");
console.log(memoizedSquare(9999, 7496));
console.timeEnd("First Call");

console.time("First Call");
console.log(memoizedSquare(9999, 7496));
console.timeEnd("First Call");