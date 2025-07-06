// 📘 JavaScript Practice – Day 2

// ✅ Question 1: Count Vowels in a String
// Simple Definition:
// Write a function that takes a string and counts how many vowels (a, e, i, o, u) are in it.


// Input: "hello"
// Output: 2  // 'e' and 'o'


function vowelsCount(str){
    let newStr = '';
    let count = 0;
    for(let i = 0;i<str.length;i++){
        if(str[i]==="a"||str[i]==="e"||str[i]==="i"||str[i]==="o"||str[i]==="u"){
            newStr += str[i]
            count ++
        }
    }
    return `${count} , ${newStr.split('').join(' and ')}`
}

// console.log(vowelsCount('hello'))


// using built in methods

function vowelsCount2(str){
    let vowels = 'aeiou'
    let newStr = '';
    let count = 0;
    for(const vowel of str){
        if(vowels.includes(vowel)){
            newStr += vowel;
            count++;
        }
    }
    return `${count} , ${newStr.split('').join(' and ')}`
}
// console.log(vowelsCount2('hello'))


// ✅ Question 2: Find the Second Largest Number in an Array
// Simple Definition:
// Write a function that finds the second largest number from an array.


// Input: [2, 5, 1, 9, 7]
// Output: 7


function findSecLargestNum(){
    let arr =  [2, 5, 1, 9, 7];
    let value = 0;
    let value2 = 0;
    let index;
    for(let i = 0; i<arr.length;i++){
        if(arr[i]>value){
            value = arr[i]
        }
    }
    index = arr.indexOf(value)
    arr.splice(index,1)
    for(let j = 0; j<arr.length; j++){
        if(value>arr[j]){
            value2 = arr[j]
        }
    }

    return value2
    

}
// console.log(findSecLargestNum())

// using in-built methods
function findSecLargestNum2(){
    let arr =  [2, 5, 1, 9, 7];
    let newArr = [];
    arr.sort()
    for(let i = arr.length -1;i>=0; i--){
        newArr.push(arr[i])
    }
    return newArr[1];
}

// console.log(findSecLargestNum2())

function findSecLargestNum3(arr){
    let newArr  = [...arr].sort((a,b)=>b-a)
    return newArr[1]
}
// console.log(findSecLargestNum3([2, 5, 1, 9, 7]))

// ✅ Question 3: Reverse a Number
// Simple Definition:
// Write a function that reverses a number (not a string).


// Input: 12345
// Output: 54321

function reversesNumber(num){
    let arr = num.toString().split('')
    let newArr = []
    for(let i = arr.length -1; i >= 0;i--){
        newArr.push(arr[i])
    }

    return newArr = Number(newArr.join(''))
    
    
}
// console.log(reversesNumber(45126))


// using bult in methods

function reversesNumber2(num){
    return num.toString().split('').reverse().join('')
}
// console.log(reversesNumber2(41543))


// ✅ Question 4: Check if a Number is Prime
// Simple Definition:
// Write a function that checks if a number is prime.


// Input: 7
// Output: true

// Input: 10
// Output: false


function primeNum(num){
    let count = 0;
    if(num <= 1){
        return 'Enter a number above 1'
    }else if(num>1){
        for(let i = 1; i <= num;i++){
            if(num%i==0){
                count++
            }
        }
    }
    
    if(count ==2){
        return true;
    }else{
        return false
    }
    
}

// console.log(primeNum(10))

function primeNum2(num){
    if(num<=1) return false;
    
    for(let i = 2;i<= Math.sqrt(num);i++){
        if(num%i === 0) return false;
    }

    return true;
}
// console.log(primeNum2(7))


// ✅ Question 5: Sum of Digits
// Simple Definition:
// Write a function to find the sum of digits of a number.


// Input: 123
// Output: 6  // (1 + 2 + 3)


function sumOfDigits(num){
    let arr = num.toString().split('')
    let value = 0;
    for(let i = 0;i< arr.length;i++){
        value += Number(arr[i])
    }
    return value;
}
// console.log(sumOfDigits(123))

// using built in methods

function sumOfDigits2(num){
    let arr = num.toString().split('')
    let newArr = arr.map(val=>Number(val))
    
    let total = newArr.reduce((acc,curentval)=>acc + curentval,0)
    return total
}

console.log(sumOfDigits2(2414))