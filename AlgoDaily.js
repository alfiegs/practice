//DAILY ALGORITHM PRACTICE


//###############################################################################################
//###############################################################################################
//###############################################################################################
//###############################################################################################
//###############################################################################################
//###############################################################################################
//###############################################################################################
//###############################################################################################
//###############################################################################################
//###############################################################################################
// // 8/27/19
// //  Day 5: Validate Palindrome
// // https://algodaily.com/challenges/validate-palindrome
// //__________________________________________________________________________________________________
// // Given a string str, can you write a method that will return True if is a palindrome and False if it is not? 
// // If you'll recall, a palindrome is defined as "a word, phrase, or sequence that reads the same backward as forward". 
// // For now, assume that we will not have input strings that contain special characters or spaces.

// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// function isPalindrome(string1){
// var numlets = "abcdefghijklmnopqrstuvwxyz1234567890";
// var string1ToLower = string1.toLowerCase();
// var string1AlphanumericArray = [];

// for (i=0; i<string1ToLower.length; i++){ //removes all non-alphanumeric characters by pushing a character to string1AlphanumericArray only if it is in the numlets string
//     if (numlets.includes(string1ToLower[i])){
//         string1AlphanumericArray.push(string1ToLower[i])
//     }
// }

// var resultString = string1AlphanumericArray.join(''); //turns string1AlphanumericArray into a string
// var reversedString = string1AlphanumericArray.reverse().join('') // reverses string1AlphanumericArray and turns it into a string

// if (resultString === reversedString){ //if the string is the same forwards and backwards, return true
//     return true
// } else {
//     return false
// }
// }

// console.log(isPalindrome("a man, a plan, a canal, Panama"))
// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//###############################################################################################
//###############################################################################################
//###############################################################################################
//###############################################################################################
//###############################################################################################
//###############################################################################################
//###############################################################################################
//###############################################################################################
//###############################################################################################
//###############################################################################################

// // Day 4: Is An Anagram?
// //__________________________________________________________________________________________________
// // Here's the definition of an anagram: a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// // We are given two strings like "cinema" and "iceman" as inputs. Can you write a method isAnagram(str1, str2) that will return true or false 
// // depending on whether the strings are anagrams of each other?

// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// var string1 = "Madonna Louise Ciccone";
// var string2 = "One cool dance musician";

// function isAnagram(str1, str2){
//     string1 = str1.toLowerCase();
//     string2 = str2.toLowerCase();

//     var check1 = string1.split(' ').join('').split('').sort().join();
//     var check2 = string2.split(' ').join('').split('').sort().join();

//     //split(' ') turns string into array split up at each space
//     //join('') joins each item of the array into a string and separates them by '' (which is nothing), so the string has no spaces
//     //split('') turns string into array split up at each character
//     //sort() sorts each item in the array by alphabetical order
//     //join('') joins each item of array into a string separated by nothing

//     if(check1 === check2){
//         return true;
//     } else {
//         return false;
//     }
// }

// isAnagram(string1, string2)
// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//###############################################################################################
//###############################################################################################
//###############################################################################################
//###############################################################################################
//###############################################################################################
//###############################################################################################
//###############################################################################################
//###############################################################################################
//###############################################################################################
//###############################################################################################

// // 8/25/19
// // Day 3: Reverse Only Alphabetical
// // https://algodaily.com/challenges/reverse-only-alphabetical
// //__________________________________________________________________________________________________

// // You are given a string that contains alphabetical characters (a - z, A - Z) and some other characters ($, !, etc.).
// // Can you reverse only the alphabetical ones?
// // 'sea!$hells3' >> 'sll!$ehaes3'

// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// function onlyReverseLetters(originalString){

//     letters = 'abcdefghijklmnopqrstuvwxyz';

//     splitString = originalString.split(""); // turn originalString into an array split on ""
//     splitStringCopy = [...splitString]; //make a copy of splitString so as not to alter it when reversing
//     reversedString = splitStringCopy.reverse();
//     reversedStringLetters = []


//     for (i=0; i<splitStringCopy.length; i++){ //add only the letters of the reversedString to a new array of reversedStringLetters
//         if (letters.includes(splitStringCopy[i])){
//             reversedStringLetters.push(reversedString[i])
//         }
//     }

//     for (i=0; i<splitString.length; i++){ // convert splitString element at index i to the first element of reversedStringLetters. Then remove the first element of reversedStringLetters.
//         if (letters.includes(splitString[i])){
//             splitString[i] = reversedStringLetters[0];
//             reversedStringLetters.shift()
//         }
//     }

//     return splitString.join("") //turn modified splitStrinng back into a string on ""

// }

// console.log(onlyReverseLetters('boo45ooo###ooo1oot'))
// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//###############################################################################################
//###############################################################################################
//###############################################################################################
//###############################################################################################
//###############################################################################################
//###############################################################################################
//###############################################################################################
//###############################################################################################
//###############################################################################################
//###############################################################################################
// // Day 2: FizzBuzz
// //__________________________________________________________________________________________________
// We're given a number n.

// Write a function that returns the string representation of all numbers from 1 to n based on the following rules:
// If it's a multiple of 3, represent it as "fizz".
// If it's a multiple of 5, represent it as "buzz"
// If it's a multiple of both 3 and 5, represent it as "fizzbuzz".
// If it's neither, just return the number itself.
// As such, fizzBuzz(15) would result in '12fizz4buzzfizz78fizzbuzz11fizz1314fizzbuzz'.

// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // //SOLUTION
// function fizzbuzz(n){
// let fizzString = ""
// for (i=1; i<n+1; i++){
//     //for every item in an array starting at 1 and going up to n (n is passed in at function call)
//     //if the item is divisible both by 5 and by 3 without remainders, concatenate the word "fizzbuzz" to fizzString
//     if (i % 5 === 0 && i % 3 === 0){
//         fizzString = fizzString + "fizzbuzz"
//     }
//     //if the item is divisible only by 3 without remainders, concatenate "fizz" to fizzString
//     else if (i % 3 === 0){
//         fizzString = fizzString + "fizz"
//     }
//     //if the item is divisible only by 5 without remainders, concatenate "buzz" to fizzString
//     else if (i % 5 === 0){
//         fizzString = fizzString + "buzz"
//     }
//     //if the item is not divisible by 3 or 5, concatenate the item to fizzString
//     else (fizzString = fizzString + i)
// }
// console.log(fizzString)
// }
// fizzbuzz(15)
// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//###############################################################################################
//###############################################################################################
//###############################################################################################
//###############################################################################################
//###############################################################################################
//###############################################################################################
//###############################################################################################
//###############################################################################################
//###############################################################################################
//###############################################################################################
// // // 8/23/19
// //__________________________________________________________________________________________________
// // Day 1: Array Intersection

// // Can you write a function that takes two inputs and returns their intersection? All element in the final result should be unique.

// // const nums1 = [1, 2, 2, 1];
// // const nums2 = [2, 2];

// // intersection(nums1, nums2);
// // // [2]
// // Here's another one:

// // const nums1 = [4,9,5];
// // const nums2 = [9,4,9,8,4];

// // intersection(nums1, nums2);
// // // [9, 4]


// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// //MY ORIGINAL SOLUTION
// const nums1 = [ 4,17,4,4,15,16,17,6,7 ];
// const nums2 = [ 15,2,6,20,17,17,8,4,5 ];

// function ArrayIntersection(a, b) {
//     let uniqueNumsA = [];
//     let uniqueNumsB = [];
//     let intersectingNums = [];
//     a.forEach((element)=>{
//         if (uniqueNumsA.includes(element)){}
//         else {uniqueNumsA.push(element)}
//     })
//     console.log(`Unique Numbers in Array: ${uniqueNumsA}`)
//     b.forEach((element)=>{
//         if (uniqueNumsB.includes(element)){}
//         else {uniqueNumsB.push(element)}
//     })
//     uniqueNumsB.forEach((element)=>{
//         if (uniqueNumsA.includes(element)){
//             intersectingNums.push(element)
//         }
//     })
//     console.log(`Unique Numbers in B: ${uniqueNumsB}`)
//     console.log(`Intersecting Numbers: ${intersectingNums}`)
// }

// ArrayIntersection(nums1, nums2)
// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // NOTES

// intersection = largest set that contains all elements common in 2 sets

// JS set takes an array and returns only the unique items in the array
// e.g.     var set1 = new Set([1,1,1,1,2,2,2,3,3,4,5])  >>  console.log(set1)  returns  [1,2,3,4,5]


// //SOLUTION USING SETS
// var nums1 = [ 4,17,4,4,15,16,17,6,7 ]
// var nums2 = [ 15,2,6,20,17,17,8,4,5 ]
// var set = new Set(nums1)
// var intersectors = new Set(nums2.filter((n) => set.has(n)));
// console.log(intersectors)

//###############################################################################################
//###############################################################################################
//###############################################################################################
//###############################################################################################
//###############################################################################################
//###############################################################################################
//###############################################################################################
//###############################################################################################
//###############################################################################################
//###############################################################################################





