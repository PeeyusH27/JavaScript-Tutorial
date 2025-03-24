//Return indexes of two numbers such that they add up to the target.
//Input: [2,7,11,15], target = 9
//Output: [0,1]

const twoSum = (arr, target) => {
    //BRUTE FORCE APPROACH:
    // for(let i = 0; i < arr.length; i++){
    //     for(let j = 1; j < arr.length; j++){
    //         if((arr[i] + arr[j]) === target)return [i,j]
    //     }
    // }


    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        let n = arr[i]

        if(obj[target - n]>=0){
            return [obj[target-n], i]
        }
        else{
            obj[n] = i;
        }
    }
}

console.log(twoSum([2,7,11,15],9));