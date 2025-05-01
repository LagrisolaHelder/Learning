//Data Types
// 1. String
let name = "John Doe";
console.log(name); // Output: John Doe


// 2. Number
let age = 30;   
console.log(age); // Output: 30

// 3. Boolean
let isStudent = true;
console.log(isStudent); // Output: true

// 4. Undefined
let address;
console.log(address); // Output: undefined

// 5. Null
let car = null;
console.log(car); // Output: null

// 6. Symbol (ES6)
let uniqueId = Symbol("id");
console.log(uniqueId); // Output: Symbol(id)

// 7. BigInt (ES11)
let bigNumber = BigInt(1234567890123456789012345678901234567890);
console.log(bigNumber); // Output: 1234567890123456789012345678901234567890n

// 8. Object
let person = {
    name: "John Doe",
    age: 30,
    isStudent: true
};

console.log(person); // Output: { name: 'John Doe', age: 30, isStudent: true }
console.log(person.name); // Output: John Doe
console.log(person["age"]); // Output: 30
console.log(person.isStudent); // Output: true
console.log(person["isStudent"]); // Output: true

// 9. Array
let fruits = ["apple", "banana", "cherry"];
console.log(fruits); // Output: [ 'apple', 'banana', 'cherry' ]
console.log(fruits[0]); // Output: apple
console.log(fruits[1]); // Output: banana
console.log(fruits[2]); // Output: cherry
console.log(fruits.length); // Output: 3
console.log(fruits[fruits.length - 1]); // Output: cherry
console.log(fruits[fruits.length - 2]); // Output: banana
console.log(fruits[fruits.length - 3]); // Output: apple
 

// 10. Function
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("John")); // Output: Hello, John!
console.log(greet("Jane")); // Output: Hello, Jane!
 

// 11. Date
let currentDate = new Date();
console.log(currentDate); // Output: Current date and time
console.log(currentDate.getFullYear()); // Output: Current year
console.log(currentDate.getMonth()); // Output: Current month (0-11)
console.log(currentDate.getDate()); // Output: Current date (1-31)
console.log(currentDate.getHours()); // Output: Current hour (0-23)
console.log(currentDate.getMinutes()); // Output: Current minutes (0-59)
console.log(currentDate.getSeconds()); // Output: Current seconds (0-59)
console.log(currentDate.getMilliseconds()); // Output: Current milliseconds (0-999)
console.log(currentDate.getTime()); // Output: Current timestamp (milliseconds since Jan 1, 1970)
 
//there are many more data types in JavaScript, but these are the most commonly used ones.
// You can also create custom data types using classes and prototypes, but those are more advanced topics.


 // Data Type Conversion
// 1. String to Number
let strNum = "123.45";
let num = parseFloat(strNum);
console.log(num); // Output: 123.45
console.log(typeof num); // Output: number


// 2. Number to String
let numToStr = 123.45;
let str = numToStr.toString();
console.log(str); // Output: "123.45"
console.log(typeof str); // Output: string


// 3. String to Boolean
let strBool = "true";
let bool = (strBool === "true");
console.log(bool); // Output: true
console.log(typeof bool); // Output: boolean

// 4. Boolean to String
let boolToStr = true;
let strFromBool = boolToStr.toString();
console.log(strFromBool); // Output: "true"
console.log(typeof strFromBool); // Output: string

// 5. Number to Boolean
let numToBool = 0; // 0 is falsy
let boolFromNum = Boolean(numToBool);
console.log(boolFromNum); // Output: false
console.log(typeof boolFromNum); // Output: boolean


// 6. Boolean to Number
let boolToNum = true; // true is 1
let numFromBool = Number(boolToNum);
console.log(numFromBool); // Output: 1
console.log(typeof numFromBool); // Output: number

// 7. Null to Number
let nullToNum = null; // null is 0
let numFromNull = Number(nullToNum);
console.log(numFromNull); // Output: 0
console.log(typeof numFromNull); // Output: number

// 8. Undefined to Number
let undefinedToNum = undefined; // undefined is NaN
let numFromUndefined = Number(undefinedToNum);
console.log(numFromUndefined); // Output: NaN
console.log(typeof numFromUndefined); // Output: number

// 9. String to Array
let strToArray = "apple,banana,cherry";
let arrayFromStr = strToArray.split(",");

console.log(arrayFromStr); // Output: [ 'apple', 'banana', 'cherry' ]
console.log(typeof arrayFromStr); // Output: object (arrays are objects in JavaScript)



