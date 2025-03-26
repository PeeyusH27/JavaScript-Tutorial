let nums = {
    a: 100,
    b: 200,
    title: "Mu numbers"
}

multiplyByTwo(nums)

function multiplyByTwo(obj){
    for(key in obj){
        if(typeof obj[key] === "number"){
            obj[key] = obj[key] * 2
        }
    }
}
console.log(nums);


//If we assign an Object as a key the key becomes [object object]
let a = {}
let b = {key:"b"} //Key=key, value="b"
let c = {key:"c"} //Key=key, value="c"

a[b] = 234;
a[c] = 786;
console.log(a[b]);
//Prints 786 because a[b] where b = {key:"b"} is an Object
//so a[b] = a[object object] and a[c] = a[object object] so last value of this key is updated