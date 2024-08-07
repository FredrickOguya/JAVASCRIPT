/*
Object Factory
Now, let's say we want to create multiple objects. Should we just write multiple object literals?

Actually, we can write a function to create objects for us! Think of how you could write this function before you read the rest of this lecture.

So, to create that function, we need to have a function that takes in the parameters we want, and then creates and returns an object literal.

Let's make a factory for people. Each person object should have a name, age and occupation. This is what that function would look like:

function createPerson(personName, personAge, personOccupation) {
    return {
        name: personName,
        age: personAge,
        occupation: personOccupation
    }
}
Now, we can use this function to create multiple objects:

const Jill = createPerson("Jill Hemings", 21, "Hair Stylist");
const Jack = createPerson("Jack Smith", 52, "Engineer");
const Jonah = createPerson("Jonah Hill", 25, "Singer");

console.log(Jill.name);
console.log(Jack.age);
console.log(Jonah.occupation);
Output: Jill Hemings, 52, Singer.

Bonus Tip:
We can put object literals inside object literals:

const person = {
    name: {
        first: "John",
        last: "Doe"
    },
    age: 42
}

console.log(person.name.first);
console.log(person.age);
Output: John, 42.


Challenge

Easy
Write a function that creates objects. It should take in three parameters. The first one should have the key name, the second one age and the third one should be numberOfToes. Return the object.
*/
function createHuman(name, age, numberOfToes) {
    // Write code here
    const properties = {
        name:name,
        age: age,
        numberOfToes:numberOfToes
    }
    return properties

}
