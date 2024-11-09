//Varibles
//var, let, const
//string, number, boolean, null, undefined

//Concatination and interpol
var price = 50
var product = "gun"
var concat = "The price of " + product + " is " + price
var interpolation = `The price of ${product} is ${price}`

console.log(concat)
console.log(interpolation)

//Objecs
var customer = {
    firstName: 'John',
    lastName: 'Smith'
}

customer.firstName

//Array
var cars = ["Ferrari", "Mazerati", "Bugatti"]
cars[1]

//Operators
// <, >, <=, >= 
// == - loose comparison - 1 == '1' - true,  === - strict omparison, not only value, but data type, 1 === '1' - false
// logical: AND - &&, OR - ||, NOT - !

//Conditions
if(true) {

} else if(false) {

}

//Loops
for(let i=0; i<5; i++) {
}

for(let car of cars) {
    break
}

//ES6 syntax for loop
cars.forEach( car => {
    car
})

//Functions
export function func1(name, surName){
    var fullName = name + " " + surName
    return fullName
}
var fullName = func1(customer.firstName, customer.lastName)
//Aonymous function
var hello1 = function() {

}
hello1()

//ES6 syntax, arrow function
var helloTwo =() => {

}
helloTwo()

//Import function
import { name } from '../jsFundamentals/section1.js'
name(name, surName)

//Import everything
import * as helper from '../jsFundamentals/section1.js'
helper.func1(customer.firstName, customer.lastName)

export class CustomerDetails {

    /**
     * This function prints name
     * @param {name} name 
     */
    printName(name){
        console.log(name)
    }
}

//Or create export here
//export var customer = new CustomerDtails();
