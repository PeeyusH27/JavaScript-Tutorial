//Fibonacci series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
//Input: n = 3 ---> output: 3

const fibonacci = (x) => {
    //USING FOR LOOP:
    // const arr = [0, 1]
    //Run a loop from o -> n add nth ele to prev index
    // for(let i = 2; i <= x; i++){
    //     arr.push(arr[i-1] + arr[i-2])
    //     console.log(`Interation ${i-2}:`, arr[i-1], "+", arr[i-2], "=", arr[i]);
    // }


    //USING RECURSION:
    return x<=1 ? x : fibonacci(x-1) + fibonacci(x-2)
}

console.log(fibonacci(12));
