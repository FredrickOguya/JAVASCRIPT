/*
Read only Properties

Well, what if we want a property to be private, but we still want to be able to read the value from anywhere?

Let's make a circle class:

function Circle() {
    let radius = 5;
    
    this.calculateArea = function() {
        return radius * radius * Math.PI;
    }
}

const myCircle = new Circle();
Now, the radius variable is private and if we try to read it like: myCircle.radius, we will get undefined.

Instead, let's make a method that gives us the value of the private variable. This is what that would look like:

function Circle() {
    let radius = 5;
    
    this.getRadius = function() {
        return radius;
    }
    
    this.calculateArea = function() {
        return radius * radius * Math.PI;
    }
}

const myCircle = new Circle();
console.log(myCircle.getRadius());
Output: 5.


Challenge

Easy
You are given an object with the property innerText. Turn that property private and write a getter function for it called getInnerText.


Hints

Hint 1
Revealed

Turn the property into a normal variable and write a function returning it.


Solution

*/
//coddy's Solution === mine


function Paragraph() {
    const innerText = 'Hi! I am a Paragraph.';
    
    this.getInnerText = () => innerText;
}