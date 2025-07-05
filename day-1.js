// ✅ Question 1: Reverse a String
// Simple Definition: Write a function that takes a string and returns the reverse of that string.

// Input: "hello"
// Output: "olleh"

// with built in methods
function reverseString(str) {
  // let arr = str.split('')
  // let reverseArr = arr.reverse()
  // return reverseArr.join('')

  return str.split("").reverse().join("");
}
// console.log(reverseString('hello'))

// without built in methods

function revString(str) {
  let arr = [];
  for (let count = str.length - 1; count >= 0; count--) {
    arr.push(str.charAt(count));
  }
  return arr.join("");
}

// console.log(revString('hello'))

function revString2(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  console.log(newStr);
}
// console.log(revString2('hello'))

// ✅ Question 2: Check for Palindrome
// Simple Definition: Write a function to check whether a given string is a palindrome (same forwards and backwards).

// Input: "madam"
// Output: true

function palindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return "given string is not a palindrome";
    }
  }

  return "given string is a not palindrome";
}
// console.log(palindrome('abhay'))

function palindrome2(str) {
  let j = str.length - 1;
  for (let i = 0; i < str.length / 2; i++) {

    if (str[i] != str[j]) {
      return false;
    } 
    j--;
  }
  return true;
  
}
// console.log(palindrome2("abhay"));

function palindrome3(str) {
  let arr = str.split("").reverse().join("");
  if (arr == str) {
    return "given string is a palindrome";
  } else {
    return "given string is not a palindrome";
  }
}
// console.log(palindrome3('madam'))



// ✅ Question 3: FizzBuzz
// Simple Definition: Print numbers from 1 to 50.

// If a number is divisible by 3 → print "Fizz"

// If divisible by 5 → print "Buzz"

// If divisible by both → print "FizzBuzz"


// Output: 1, 2, Fizz, 4, Buzz, Fizz, ...

function fizzBuzz(){
    let num ;
    for(num = 1; num<=50;num ++){
        if(num % 5 === 0 && num % 3 === 0){
            console.log('FizzBuzz')
            
        }else if (num % 3 === 0){
            console.log('Fizz')
            
        }else if(num % 5 === 0){
            console.log('buzz')
            
        }else{
            console.log(num)
        }
        
    }
}
// fizzBuzz()

// ✅ Question 4: Find the Largest Number in an Array
// Simple Definition: Write a function that takes an array of numbers and returns the largest one.

// Input: [2, 45, 3, 67, 34]
// Output: 67

function largeNum(){
    let arr = [2, 45, 3, 67, 34];
    let value = arr[0];

    for(let i = 0; i<arr.length;i++){
        if(arr[i]>value){
           value = arr[i]
        }
        
    }
    return value
}
// console.log(largeNum())

// using built in method
function largeNum2(){
    let arr = [2, 45, 3, 67, 34];
    return Math.max(...arr)
}
// console.log(largeNum2())


// ✅ Question 5: Factorial of a Number
// Simple Definition: Write a function that returns the factorial of a number using a loop.

// Input: 5
// Output: 120  (5*4*3*2*1)



function factorial(num){
    let value = 1;
    for(let i = num; i>0;i--){
        value = i*value
    }
    return value
}

// console.log(factorial(5))


function factorial2(num){
    if(num === 0 || num === 1) return 1;
    return num * factorial2(num -1)
}

console.log(factorial2(5))