
// // JS Data Types

// 7 Primatives:
// Boolean
// Null
// Undefined
// Number
// BigInt
// String
// Symbol

// and Object makes 8 data types





// // COERCION

// process of converting value from one type to another (such as string to number, object to boolean, and so on)
// Coercion can be implicit or explicit

// // Implicit Coercion - treat one type as another type without using any methods to convert it
// var a = "42"
// var b = a * 1

// console.log(a)
// console.log(b)

// // Explicit Coercion - use a method to formally convert one type to another
// var a = "42";
// var b = Number(a)

// console.log(a)
// console.log(b)




function getVowels(str) {
    var n = str.match(/[a-z]/g);
    var m = str.match(/[1-9]/g);
    return [m, n]
}

console.log(getVowels('abc789')[0]);
console.log(getVowels('abc789')[1]);
  // expected output: 0