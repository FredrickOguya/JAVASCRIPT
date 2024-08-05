/*
There is a different kind of function we could use to create objects that is a bit more complex. We call them constructor functions. THESE FUNCTIONS ARE ALSO KNOWN AS CLASSES. We will use class to refer to constructor functions in this course.

Here is what we previously used, just so you have it as a reference:

function createPerson(personName, personAge, personOccupation) {
    return {
        name: personName,
        age: personAge,
        occupation: personOccupation
    }
}
Now, the first difference with this new function is the name. If we are making people, instead of calling it createPerson, we would call it Person with a capital letter.

function Person(name, age, occupation) {
Next, instead of returning an object literal, we are going to use the this keyword to set the properties of the object. This is what that looks like:

function Person(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
}
So, what is the this keyword?

The this keyword refers to the current object itself. We are basically saying: set the property name with a value to THIS object. Let's say we have an object called myPerson. Using the this keyword is the same as saying myPerson.name = "John Doe", but since we are INSIDE the object, we use the this keyword instead of myPerson.

Then, when we want to create a new person, this is how we would do it:

const husband = new Person("John Doe", 35, "Web Designer");
We have to use the new keyword to tell the constructor function to make a new object. Do not forget it.

Here is the series of steps that happen when we execute this line of code. First, a new empty object literal is created in memory. Then, thanks to the constructor function, we tell it set the properties name, age, and occupation to THIS object that you just created, and then put that object in the variable named husband.


Challenge

Easy
Write a constructor function named Cube. It should take in one parameter, the length of one side. It should have a side property with the value of the parameter. It should also have a method called calculateVolume which calculates and returns the volume. It should have another method called setSide() which takes in a parameter and changes the value of this.side to the passed parameter.
*/
function Cube(side) {
    this.side= side;
    this.calculateVolume =function(){return this.side**3}
    this.setSide=(val)=> this.side=val
}
Cube(7)