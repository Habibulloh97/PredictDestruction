const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)    // Logs cars of index 0
console.log(otherRandomCar)  // Logs cars index of 1



const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}

const { otherName } = employee;
//Predict the output
// console.log(name);   // Name comes out not defiened because to reach the name we need to use employee.name
console.log(otherName); // otherName is undefiened because javascript is weird

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person.age;  
//Predict the output
console.log(password);   // Logs 12345
console.log(hashedPassword);  // Unswfined because idk

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);  // False 
console.log(first == third);   // True


const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);   // Value
console.log(secondKey); // [1,5,1,8,3,3]
console.log(secondKey[0]);  // 1
console.log(willThisWork); // 5

