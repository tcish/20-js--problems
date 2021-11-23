// -------------------------------------------------------
// 1. Print the multiplication table with 7
// -------------------------------------------------------
// for (let i = 1; i <= 10; i++) {
//   console.log(`200 * ${i} = ${200 * i}`)
// }

// -------------------------------------------------------
// 2. Print all the multiplication tables with numbers from 1 to 10
// -------------------------------------------------------
// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`)
//   }
// }

// -------------------------------------------------------
// 3. Calculate the sum of odd numbers greater than 10 and less than 30
// -------------------------------------------------------
// let sum = 0
// for (let i = 11; i <= 30; i += 2) {
//   sum += i
// }

// console.log(sum)


// -------------------------------------------------------
// 4. Create a function that will convert from Celsius to Fahrenheit
// -------------------------------------------------------
// const celsiusToFahrenheit = (celsius) => {
//   return `${celsius}C = ${(celsius * 9/5) + 32}F`
// }

// const result = celsiusToFahrenheit(10)
// console.log(result)


// -------------------------------------------------------
// 5. Calculate the sum of numbers in an array of numbers
// -------------------------------------------------------
// const calcTotalOfArray = (arr) => {
//   let total = 0
//   for (const array of arr) {
//     total += array
//   }
//   return total
// }

// const sumArray = [2, 3, -1, 5, 7, 9, 10, 15, 95]
// const result = calcTotalOfArray(sumArray)
// console.log(result)


// -------------------------------------------------------
// 6. Calculate the average of the numbers in an array of numbers
// -------------------------------------------------------
// const calcAverageOfArray = (arr) => {
//   let total = 0
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i]
//   }
//   return total / arr.length
// }

// const array = [1, 3, 9, 15, 90]
// const output = calcAverageOfArray(array)
// console.log(output)


// -------------------------------------------------------
// 7. Create a function that receives an array of numbers and returns an array containing only the positive numbers
// -------------------------------------------------------
// const returnPositiveOfArray = (arr) => {
//   let positiveNum = []
//   for (const array of arr) {
//     if(array >= 0) {
//       positiveNum.push(array)
//     }
//   }
//   return positiveNum
// }

// const arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1]
// const result = returnPositiveOfArray(arr)
// console.log(result)


// -------------------------------------------------------
// 8. Find the maximum number in an array of numbers
// -------------------------------------------------------
// const findMaxInArray = (arr) => {
//   let maxNum = arr[0]
//   for (let i = 0; i < arr.length; i++) {
//     if (maxNum < arr[i]) {
//       maxNum = arr[i]
//     }
//   }
//   return maxNum
// }

// const array = [-5, 100, -3, 12, -9, 5, 90, 0, 1]
// const output = findMaxInArray(array)
// console.log(output)


// -------------------------------------------------------
// 9. Print the first 10 Fibonacci numbers without recursion
// -------------------------------------------------------
// let fibonacci1 = 0
// console.log(fibonacci1)

// let fibonacci2 = 1
// console.log(fibonacci2)

// for (let i = 2; i < 10; i++) {
//   const fiboSeries = fibonacci1 + fibonacci2
//   console.log(fiboSeries)

//   fibonacci1 = fibonacci2
//   fibonacci2 = fiboSeries
// }


// -------------------------------------------------------
// 10. Create a function that will find the nth Fibonacci number using recursion
// -------------------------------------------------------
// const findFibonacci = (num) => {
//   if (num === 0) return 0
//   if (num === 1) return 1
  
//   return findFibonacci(num -1) + findFibonacci(num -2)
// }

// const result = findFibonacci(4)
// console.log(result)


// -------------------------------------------------------
// 11. Create a function that will return a Boolean specifying if a number is prime
// -------------------------------------------------------
// const isPrime = (num) => {
//   if(num < 0) return false
//   if(num === 1) return true

//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) return false
//   }
//   return true
// }

// const result1 = isPrime(3)
// console.log(2 +" is prime? => "+ result1)
// const result2 = isPrime(9)
// console.log(9 +" is prime? => "+ result2)
// const result3 = isPrime(20)
// console.log(20 +" is prime? => "+ result3)


// -------------------------------------------------------
// 12. Calculate the sum of digits of a positive integer number
// -------------------------------------------------------
// const calcDigits = (num) => {
//   let total = 0
//   // make number string 'cuse to loop through it
//   const string = num.toString()
//   for (const char of string) {
//     const numbers = parseInt(char)
//     total += numbers
//   }
//   return total
// }

// const result = calcDigits(1235231)
// console.log(result)


// -------------------------------------------------------
// 13. Print the first 100 prime numbers
// -------------------------------------------------------
// const hundredPrime = (num) => {
//   let count = 1
//   let prime = 2

//   while (count < num) {
//     if (isPrime(prime)) {
//       console.log(`${count} no prime is => ${prime}`)
//       count++
//     }
//     prime++
//   }
// }

// const isPrime = (num) => {
//   if(num < 0) return false
//   if(num === 1) return true

//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) return false
//   }
//   return true
// }

// hundredPrime(10)


// -------------------------------------------------------
// 14. Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"
// -------------------------------------------------------
// const getPrimes = (nPrimes, startAt) => {
//   const arr = []

//   while (arr.length < nPrimes) {
//     if (isPrime(startAt)) {
//       arr.push(startAt)
//     }
//     startAt++
//   }
//   return arr
// }

// const isPrime = (num) => {
//   if(num < 0) return false
//   if(num === 1) return true

//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) return false
//   }
//   return true
// }

// console.log(getPrimes(10, 200))
// console.log(getPrimes(30, 200))


// -------------------------------------------------------
// 15. Reverse an array
// -------------------------------------------------------
// const arrayReverse = (arr) => {
//   let reverse = []
//   for (let i = arr.length - 1; i >= 0 ; i--) {
//     reverse.push(arr[i])
//   }
//   return reverse
// }

// const array = [1, 2, 3]
// const result = arrayReverse(array)
// console.log(result)


// -------------------------------------------------------
// 16. Reverse a string
// -------------------------------------------------------
// const stringReverse = (str) => {
//   let string = ""

//   for (let i = str.length - 1; i >= 0; i--) {
//     string += str[i]
//   }
//   return string
// }

// const string = stringReverse("JavaScript")
// console.log(string)


// -------------------------------------------------------
// 17. Create a function that will merge two arrays and return the result as a new array
// -------------------------------------------------------
// const arrayMerge = (a1, a2) => {
//   let merge = []

//   a1.map((arr) => {
//     merge.push(arr)
//   })

//   a2.map((arr) => {
//     merge.push(arr)
//   })
//   return merge
// }

// const ar1 = [1, 2, 3]
// const ar2 = [4, 5, 6]
// const result = arrayMerge(ar1, ar2)
// console.log(result)


// -------------------------------------------------------
// 18. Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both
// -------------------------------------------------------
// const mergeExclusive = (a1, a2) => {
//   let exclusive = []

//   a1.map((arr) => {
//     if (!a2.includes(arr)) {
//       exclusive.push(arr)
//     }
//   })

//   for (const arr of a2) {    
//     if (!a1.includes(arr)) {
//       exclusive.push(arr)
//     }
//   }
//   return exclusive
// }

// const ar1 = [1, 2, 3, 10, 5, 3, 14]
// const ar2 = [1, 4, 5, 6, 14]
// const result = mergeExclusive(ar1, ar2)
// console.log(result)


// -------------------------------------------------------
// 19. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
// -------------------------------------------------------
// const arrayDistinct = (ar1) => {
//   let distinct = []

//   for (let i = 0; i < ar1.length; i++) {
//     if (inArray(distinct, ar1[i])) {
//       distinct.push(ar1[i])
//     }    
//   }
//   return distinct
// }

// const inArray = (pushArr, array) => {
//   for (let i = 0; i < pushArr.length; i++) {
//     if (pushArr[i] === array) {
//       return false
//     }
//   }
//   return true
// }


// const ar1 = [1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100, 6, 0]
// const result = arrayDistinct(ar1)
// console.log(result)


// -------------------------------------------------------
// 20. Create a function that will return the number of words in a text
// -------------------------------------------------------
// const wordCount = (count) => {
//   let words = 0
//   let wasSeparator = true

//   for (const c of count) {
//     if (isSeparator(c)) {
//       wasSeparator = true
//       continue
//     }

//     if (wasSeparator) {
//       words++
//       wasSeparator = false
//     }
//   }
//   return `There is total ${words} word`
// }

// const isSeparator = (c) => {
//   const separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
//   return separators.includes(c);
// }

// console.log(wordCount(""))
// console.log(wordCount("            "))
// console.log(wordCount("JavaScript!!!   "))
// console.log(wordCount("     JavaScript"))
// console.log(wordCount("    JavaScript is cool      "))
// console.log(wordCount("I like to learn JavaScript "))