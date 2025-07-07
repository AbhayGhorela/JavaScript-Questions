// ✅ Day 3 – JavaScript Questions

// ✅ Question 1: Even or Odd
// Definition:
// Write a function to check whether a number is even or odd.


// Input: 7 → Output: "Odd"  
// Input: 12 → Output: "Even"

function evenOdd(num){
    if(num % 2==0){
        return 'Even'
    }else{
        return 'Odd'
    }
}

// console.log(evenOdd(7))


// ✅ Question 2: Count Digits in a Number
// Definition:
// Write a function to count how many digits are in a number.


// Input: 1234 → Output: 4  
// Input: 9 → Output: 1

function countDigits(num){
    return num.toString().length
}
// console.log(countDigits(12345))

// without using methods

function countDigits2(num){
    if(num === 0 ) return 1

    let count = 0;

    while(num != 0){
        ++count
        num = Math.floor(num/10);
    }
    return count
}

// console.log(countDigits2(54141))

// ✅ Question 3: Find the Largest of Three Numbers
// Definition:
// Write a function to return the largest number among 3 given inputs.


// Input: 10, 5, 20 → Output: 20

function largestOfThree(a,b,c){
    if(a>b && a>c){
        return a
    }else if(b>a && b>c){
        return b
    }else{
        return c
    }
}
// console.log(largestOfThree(5,6,2))

function largestOfThree2(a,b,c){
    return Math.max(a,b,c)
}
// console.log(largestOfThree2(12,5,10))

// ✅ Question 4: Calculate Power Without **
// Simple Definition:
// Write a function that calculates the power of a number, without using ** or Math.pow().

// 🧪 Input / Output

// Input: (2, 3) → Output: 8      // 2 × 2 × 2  
// Input: (5, 0) → Output: 1      // Anything to the power of 0 is 1  
// Input: (7, 1) → Output: 7



function power2(base,exponent){
    if(exponent == 0) return 1
    let value = 1;
    for(let i = 0;i<exponent;i++){
        value *= base;
    }
    return value;
}
// console.log(power2(5,3))


// ✅ Question 5: Remove Duplicates from an Array
// Simple Definition:
// Write a function that takes an array and returns a new array with all duplicates removed.

// 🧪 Input / Output

// Input: [1, 2, 2, 3, 4, 4, 5]  
// Output: [1, 2, 3, 4, 5]

// Input: ['a', 'b', 'a', 'c']  
// Output: ['a', 'b', 'c']

function duplicatesArray(arr){
    const sets = new Set();
    for(let i = 0; i<arr.length;i++){
        sets.add(arr[i])
    }
    return Array.from(sets);
    
}
// console.log(duplicatesArray([1, 2, 2, 3, 4, 4, 5]))

function duplicates2(arr){
    
    return Array.from(new Set(arr))
}
// console.log(duplicates2([1, 2, 2, 3, 4, 4, 5]))


function duplicates3(arr){
    let newArr = arr.filter((value,index)=>{
        return arr.indexOf(value)=== index;
    })
    return newArr
    
}
console.log(duplicates3([1, 2, 2, 3, 4, 4, 5]))