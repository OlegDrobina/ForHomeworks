/*
    HW 3.1. Перелік типів
*/

// 1. Variables declaration and initialization

// 1.1. Primitive data types

const stringValue = "Test string";
const numberValue = 1;
const booleanValue = stringValue == numberValue;
const bigIntValue = 1n;
const symbolValue = Symbol(stringValue);
const nullValue = null;
let undefinedValue;

// 1.2. Object data types

const objectValue = {};
const arrayValue = [];
const funcValue = function(){};

// 2. Return typeof each variable into the console

// 2.1. Primitive typeofs log

console.log("stringValue data type is: " + typeof stringValue);
console.log("numberValue data type is: " + typeof numberValue);
console.log("booleanValue data type is: " + typeof booleanValue);
console.log("bigIntValue data type is: " + typeof bigIntValue);
console.log("symbolValue data type is: " + typeof symbolValue);
console.log("nullValue data type is: " + typeof nullValue);
console.log("undefinedValue data type is: " + typeof undefinedValue);

// 2.2. Object typeofs log

console.log("objectValue data type is: " + typeof objectValue);
console.log("arrayValue data type is: " + typeof arrayValue);
console.log("funcValue data type is: " + typeof funcValue);

// HW 3.1. end