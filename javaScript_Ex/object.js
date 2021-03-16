//Objects
//one of th JavaScript's data types
//a collection of related data and/or functionality
//Nearly all objects in JavaScript are instances of Object
//object ={key:value}

//1. Literals and properties
const name = 'nayoon';
const age = 4;



function print(person){
    console.log(person.name);
    console.log(person.age);
}


const obj1 = {}; //'object literal' syntax
const obj2 = new Object(); //'object constructor'syntax

const nayoon = {name:'nayoon',age:'19'};
print(nayoon);

//자바스크립트에서는 선언전에 정의가 가능(dynamically typed language)
//can add properties later
nayoon.isStudent = true;
console.log(nayoon.isStudent);

//can delete properties later
delete nayoon.isStudent;


//2.Computed properties
//.해당하는값을 가져오고싶을때
console.log(nayoon.name);
//정확하게 어떤키가 필요한지 모를떄(런타입에서 가져올때)
//실시간으로 원하는 키를 가져올때
console.log(nayoon['name']); 
nayoon['isStudent'] = true;
console.log(nayoon.isStudent);

function printValue(obj, key){
    //console.log(obj.key)  undefined
    console.log(obj[key]); 
}

printValue(nayoon,'name');
printValue(nayoon,'age');


//3.Property value shorthand
const person1 = {name:'amy',age:28};
const person2 = {name:'john',age:33};


//4.Constructor function
function Person(name,age){
    //this = {};
    this.name = name;
    this.age = age;
    //return this;
}
const person3 = new Person(nayoon,19);
console.log(person3);

//5.in operator: 해당하는 object안에 key가 있는지 없는지 확인
console.log('name' in nayoon);
console.log('age' in nayoon);
console.log('random' in nayoon);


//6.for.. in vs for..of
//for(key in obj)
console.clear();
for(key in nayoon){
    console.log(key);
}

//for(value of iterable)
const array = [1,3,5,7,9];
for(let i =0; i<array.length; i++){
    console.log(array[i]);
}
for(value of array){
    console.log(value);
}


console.clear();
//7.Fun cloning 
//Object.assign(dest,[obj1,obj2,obj3...])
const user = {name:'nayoon',age:'19'};
const user2 = user;
//user2.name = 'dayoon';
console.log(user);

//old way
const user3 ={};
for(key in user){
    user3[key] = user[key];
}
console.log(user3);

//now way
const user4 = {};
Object.assign(user4, user);
//const user4 = Object.assgin({},user);
console.log(user4);

//another example
const fruit1 = {color:'red'};
const fruit2 = {color:'blue',size:'big'};
const mixed = Object.assign({},fruit1,fruit2);
console.log(mixed.color);
console.log(mixed.size);