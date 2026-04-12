// Data types

// Primitive - numbers(No int or float), string, null, boolean, undefine, BigInt, symbol
// Refference - array, object, function

// There are three ways to define variable and identifiers

//Numbers:

// let a = 123;
// console.log(typeof a);   //Console is object not function, log is method, typeof is functionality

// console.log(Number.MAX_SAFE_INTEGER);   // after this range (2^56) we have to use big int 

// console.log(Number.MIN_SAFE_INTEGER);

// let b =  BigInt(123456789123456789);
// console.log(b);


// Strings:

// let a = "       Prabhjot";
// console.log(a);
// console.log(typeof a);
// console.log(a[0]);
// console.log(a.slice(0,5));
// console.log(a.trim());          // Remove extra space and works like strip()
// console.log(a.trimEnd());
// console.log(a.trimStart());

// console.log(a.toUpperCase());
// console.log(a.toLowerCase());
// console.log(a.trim().toUpperCase());   // Chaining


// Boolean:

// let a = true;         // in boolean 't' and 'f' should be small
// console.log(a);
// console.log(typeof a);


// Undefined: it stops error generation 

// let b = {name : "Prabh"};
// console.log(b["name1"]);


// Null :

// let a = null
// console.log(typeof a)      // Data type of null is object


// Symbol: it will make unique things

// let a = Symbol("prabh")
// let b = Symbol("prabh")
// console.log(a == b)
// console.log(a)
// console.log(b)



// Splice : it will modify the original array
// let a = [1,2,3,4,5]
// a.splice(1,2)      // (start index, how many to delete)
// console.log(a)
// a.splice(1,0,6,7,8)   // (start index, how many to delete, elements to add)
// console.log(a)

// search toLoweruppercase (line 32)