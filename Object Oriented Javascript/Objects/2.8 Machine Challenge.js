/*
It is time to put you to the test. You have to write a Machine constructor function. Here is how that machine works, what its properties should be and what its methods should do:

At the start, we need to turn the machine on. So, you should have a turnOn method that "turns on the machine" and returns the string Machine is on!. If it is already on, and you try to execute that same method, it should just return the string Machine is already running!. 

machine.turnOn();
// Machine is on!
machine.turnOn();
// Machine is already running!
Now, this is the main part of the machine. It should have a method called compute() that does the following. If the machine is not turned on, it should return Machine is not on!. If it is on,  it takes an array of key-value pairs, that looks something like this: [['type', 'Animal'], ['color', 'black'], ['teeth', 32]]. What it does now, is it takes this array and creates an object with those key-value pairs. It would turn that into an object like this: { type: Animal, color: 'black', teeth: 31 }. It returns the object. HINT: you might have to use [] bracket syntax to set the keys right. 

machine.compute([['name', 'John'], ['age', 5], ['wife', 'Jill']]);
 {
    name: 'John',
    age: 5,
    wife: 'Jill'
   }

    
The last method should be the turnOff method. If the machine is on, it should turn off, and return the string Machine has been turned off!. If it is already off, it should return Machine is already off!.

machine.turnOff();
// Machine has been turned off!
machine.turnOff();
// Machine is already off!
Good luck!
hints
You should have a variable inside of your object that keeps track of whether the machine is on or off. Inside of the turnOn method, you should check if it is on and log the appropriate text, depending on if it is on or off. If it is off and you just turned it on, make sure to change the value of that variable to true.

Use the same variable to make the turnOff method, just the reverse.

Hint 2
Revealed

For the compute method, first, you have to check if the machine is on. If it is not, log the appropriate text. If it is, we move on to transforming the array into an object.

First, we create an empty object literal. Then, you have to loop through the array. This will give you each key-value pair one by one. The first element of the key-value pair array is the key. The second is the value. As we learned, we can use bracket syntax to set object properties, so we can use that to set object[key] = value.
*/
//coddys solution
function Machine() {
    this.on = false;
    
    this.turnOn = function() {
        if (this.on) {
            return 'Machine is already running!';
        }
            
        this.on = true;
        return 'Machine is on!';
        
    }
    
    this.compute = function(arr) {
        if (!this.on) {
            return 'Machine is not on!';
        }
            
        const obj = {};
            
        arr.forEach(keyValuePair => {
            const key = keyValuePair[0];
            const value = keyValuePair[1];
                
            obj[key] = value;
                
        });
            
        return obj;
        
    }
    
    this.turnOff = function() {
        if (!this.on) {
            return 'Machine is already off!';
        }
        
        this.on = false;
        return 'Machine has been turned off!';
        
    }
}

//my solution
function Machine (turnOn){
    let isOn = false;
    let 
    this.turnOn=() =>{
        if(isOn===false){
            isOn = true
        return 'machine is on!'
        }else{
            return 'machine is already running!'
        }
    }
    this.compute=(arr)=>{
        if(isOn===false){
            return 'Machine is not on!'
        }else{
           let object = {
                prop: '',
                elem: ''
            }
            for (el of arr){
                arr.el[1]=this.conmpute.object.prop
                arr.el[2]=this.compute.object.elem
            }
            return object
        }
    }
    this.turnOff=()=>{
        if (turnOn===true){
            turnOn = false
            return 'Machine has been turned off!'
        }else{
            return 'Machine is already off!'
        }
    }
}