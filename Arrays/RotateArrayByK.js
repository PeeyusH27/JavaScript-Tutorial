// Rotate Arr by K
//Rotate the array to right by K steps
// where K is non -ve
// Ip: [1,2,3,4,5,6,7] k:3 --> OP: [5,6,7,1,2,3,4]

let rotateArr = (arr, k) => {
    let size = arr.length;
    if(size < k){
        k = k % size
    }
    let rotatedarray = arr.splice(size - k, size)
    arr.unshift(...rotatedarray)
    console.log(arr)
}
rotateArr([1,2,3,4,5,6,7], 3)
rotateArr([-1,-100,3,99], 2)

//W/O INBUILT METHODS
let woInbRotate = (arr, left, right) => {
    while(left < right){
        const temp = arr[left]
        arr[left++] = arr[right]
        arr[right--] = temp;
    }
}
