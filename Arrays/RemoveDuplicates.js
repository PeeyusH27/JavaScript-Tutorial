//Remove duplicates from sorted array
// Sorted non dec order
// Remove duplicates in-place
// arr = [0, 0, 1, 1, 2, 2, 2, 3, 3] op: [1, 2, 3, 4, _, _, _, _, _]
// let removeDuplicates = (arr) => {
//     for (let i = 0; i < arr.length-1; i++) {
//         if(arr[i] === arr[i+1]){
//             arr.splice(i + 1, 1);
//             i--;
//         }
//     }
//     return arr.length;
// }



//TWO POINTER
let removeDuplicates = (arr) => {
    if(arr.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));