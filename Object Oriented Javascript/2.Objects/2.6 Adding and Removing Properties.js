/*
Adding and Removing Properties

After we create an object, we can still play with its properties, add more, and remove some if we want. This is how we do that:

Adding
To add another property, we use the same syntax that we used to get the value of some property. We can use the dot syntax or bracket syntax.

const myDog = {
    name: "Lora"
}

myDog.age = 1;
myDog['breed'] = 'Golden Retriever';

console.log(myDog);
Output:

{ name: "Lora", age: 1, breed: "Golden Retriever" }
Removing
To delete a property from an object, we can use the delete keyword. This is what that looks like:

const circle = {
    radius: 5,
    location: {
        x: 5,
        y: 10
    }
}

delete circle.location;

console.log(circle);
Output: { radius: 5 }.


Challenge

Easy
You are given a function with three parameters. The first one is an object with some properties. The second one is the first name. The third one is the last name.

What you have to do is delete the property age from the object. Then, you must add a property called name. Its vaIue should be an object, containing the first and last name. The pairs should look like this: first: firstName, and last: lastName. Return the object (as we learned, when we pass the object to a function we pass by reference, the original object is getting modified. So, technically we don't need to return it, but we do that so we can test your code). 
*/
function modifyObj(obj, firstName, lastName) {
    // Write code here
    delete obj.age;
    obj.name ={
        first:firstName,
        last:lastName
    };
    return obj;
}
