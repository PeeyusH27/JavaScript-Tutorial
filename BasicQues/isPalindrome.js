//IS a palindrome number
//I/p = 121 o/p = True

const isPalindrome = (num) => {
    return num < 0 ? false :  num === +num.toString().split('').reverse().join('')
}

console.log(isPalindrome(121))
console.log(isPalindrome(11))
console.log(isPalindrome(10))