let arr = [12, 35, 1, 10, 34, 35, 1]

// //BRUTE SOLUTION
// function findSmallest(arr){
//     let a = Array.from(new Set(arr))
//     a = a.sort((a,b) => b-a)
//     return a[1]
// }
// console.log(findSmallest(arr));



//OPTIMIZED
//Take largest and second largest
//compare each element if elem is greater than largest secondLargest = largest and Largest = elem
// let arr = [12, 35, 1, 10, 34, 35, 1]
function findSmallest(arr){
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>largest){
            secondLargest = largest
            largest = arr[i]
        }else{
            if(arr[i] != largest && arr[i] > secondLargest){
                secondLargest = arr[i]
            }
        }
    }
    return secondLargest;
}
console.log(findSmallest(arr));