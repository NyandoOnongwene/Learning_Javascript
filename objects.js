// const person = { name: 'John', age: 30, hobbies: ['reading', 'music'], greet: 
// function() { 
//     console.log('Hello!');
//  } 
// };
// console.log(person.name);

//  console.log(person.hobbies[0]);
//  person.greet();

let person = { name: 'John',
age: 30, 
address: { 
street: '123 Main St', city: 'Anytown', state: 'CA' 
}
 }; 
// Accessing object properties
 let name = person.name;
 let city = person.address.city; 
// Modifying object properties
 person.age = 40;
 person.address.state = 'NY';

 console.log(person.age);