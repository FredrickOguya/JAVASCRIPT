/*
There is another way we can do read-only properties that is a bit more complex. 

Every type of variable, including objects has a constructor function that is called when you create that variable. For example, when you create a variable, under the hood this is what is actually happening:

let x = 5;
// let x = new Number(5);

let y = 'Test';
// let y = new String('Test);
In a way, every variable and every function is an object. Objects also have their own constructor function. This function gives you access to multiple methods for objects. One of them is Object.defineProperty.

Let's create a circle class with a private property called radius. Now, we want to be able to read this property from the outside using circle.radius but we shouldn't be allowed to modify the value. This is how we do that.

function Circle() {

    let radius = 5;
    
    Object.defineProperty(this, 'radius', {
        get: function() {
            return radius;
        }
    });

    this.computeArea = () => radius * radius * Math.PI;
}

const circle = new Circle();
console.log(circle.radius);
Output: 5.

We are using Object.defineProperty to define a property and tell it which function to execute as a getter function. The Object.defineProperty method takes in three parameters:

The object on which we are setting the property. In this case, we want to set the property to the Circle object itself, so we use the keyword this.
The name of the property. This is the name you will use to reference the value.
An object with a get and a set function. In this example, we only used the get method because we don't want a setter function.
Even if we try to modify the radius, it will still stay 5.

Let's also look at setter functions. If we want to do something with the value before setting it to the variable, we can use a setter function.

function Circle() {

    let radius = 5;
    
    Object.defineProperty(this, 'radius', {
        get: function() {
            return radius;
        },
        set: function(value) {
            radius = value / 2;
        }
    });

    this.computeArea = () => radius * radius * Math.PI;
}

const circle = new Circle();
circle.radius = 100;
console.log(circle.radius);
Output: 50.

The set function takes in a value parameter and then you can use it to set the value to whatever you want.


Challenge

Easy
You are given an object with a couple of properties. Make them all read-only
*/
//coddys solution === mine
function Pet() {
    const animal = 'Bear';
    const type = 'Black';
    const age = 2;
    const dangerous = true;
    
    
     Object.defineProperty(this, 'animal', {
         get: () => animal
     });
     
     Object.defineProperty(this, 'type', {
         get: () => type
     });
     
     Object.defineProperty(this, 'age', {
         get: () => age
     });
     
     Object.defineProperty(this, 'dangerous', {
         get: () => dangerous
     });
}
