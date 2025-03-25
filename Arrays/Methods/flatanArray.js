//FLAT ARRAY
const flatanArray = (arr) => {
    return arr.reduce((acc, curr) => {
        if(Array.isArray(curr)){
            acc.push(...flatanArray(curr))
        }
    else{
        acc.push(curr)
    }
    return acc
}, [])
}

console.log(flatanArray([1, 2, [1, 2], 4, [5, 6, [7, 8]]]))


// let x = [1, 2, [1, 2], 4, [5, 6, [7, 8]]]
// let z = x.flat(Infinity)
// console.log(z);