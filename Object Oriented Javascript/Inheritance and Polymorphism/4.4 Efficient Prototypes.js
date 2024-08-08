/*
When we plan on creating tons and tons of objects with one constructor, we can make the process a bit more efficient.

This will be our example:

function Square(side) {
    this.side = side;
    
    this.calculateArea = () => this.side * this.side;
}

const square1 = new Square(1);
const square2 = new Square(2);
const square3 = new Square(5);
const square4 = new Square(1);
const square5 = new Square(6);
const square6 = new Square(2);
const square7 = new Square(8);
Here, we are creating 7 different square objects. Now, for every object we create, another copy of the calculateArea method is created in memory. Instead of doing that, we can add that method to the prototype of all the squares. Since they all have the same prototype (the same parent), only one copy of the function will be created.

function Square(side) {
    this.side = side;
}

Square.prototype.calculateArea = function() {
    return this.side * this.side;
}

const square1 = new Square(1);
const square2 = new Square(2);
const square3 = new Square(5);
const square4 = new Square(1);
const square5 = new Square(6);
const square6 = new Square(2);
const square7 = new Square(8);
So, why does this work?

First, we said that they all share the same prototype.

Second, the way JavaScript works is it first checks if the method you are calling exists on that object. So, when we call square1.calculateArea() it checks if the method calculateArea exists in the object square1. If it doesn't, it then moves on to its prototype and checks if that object has that method. In this case, it does, so the method gets executed.

This is a good thing to keep in mind when you plan on having lots of instances of the same constructor.


Challenge

Easy
Create a Calculator class that takes in 2 numbers and a character (+, -, *, or /) that tells you what operation to perform. Write a method called calculate that performs that operation on the two numbers. Returns the value. Example:

calculator.calculate(5, 2, '+');
// 7
Make sure to add the method to the property of the class, not inside of it.
*/