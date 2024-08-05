/*
Let's start with the most basic form of objects.

An object literal is a comma-separated list of name-value pairs inside of curly braces. We can attach that object to a variable. That is an object literal. Inside of the object literal, you can have variables called properties and functions called methods. Here is an example:

const myObject = {
    type: 'Addition',
    addTwoNumbers: function(num1, num2) {
        return num1 + num2;
    }
}
So, how do we access these values inside of the object?

If you remember, we have name:value pairs. We can use the name of each value to get the corresponding value.

The first method for that is using dot syntax (.). We can use the name of the variable + . + name of the value inside of the variable. This is what it looks like:

console.log(myObject.type);
Output: Addition.

We can also execute the methods using this syntax:

console.log(myObject.addTwoNumbers(5, 10));
Output: 15.

The second method is using brackets, just like an array. Except now, instead of using indexes, we use the name of the values. Like this:

console.log(myObject["type"]);
Output: Addition.

The first method is the one that you will use the most. You should only use the second one when the name has special characters, or when you want to use a variable to access or set a value. For example:

const key = "type";
console.log(myObject[key]);
// Addition

Challenge

Easy
Write an object literal with the name myObject. Inside you should have the following pairs:

key name with value ObjectsAreCool!, key lesson with value learned, and a method called calculate that takes in two numbers, multiplies them and returns the answer.
*/
// Write code here
const myObject={
    name: 'ObjectsAreCool!',
    lesson: 'learned',
    calculate: function(num1,num2){
        return num1*num2;
    }
}
console.log(myObject)