'use strict';

//Array

//1.Array declare
const arr1 = new Array();
const arr2 = [1,2];

//2/Index position
const fruits = ['π','π'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
//last data
console.log(fruits[fruits.length-1]);

console.clear();
//3.Looping over an array
//print all 
//a.for
for(let i =0; i<fruits.length; i++){
    console.log(fruits[i]);
}
//b. for of
for(let value of fruits){
    console.log(value);
}
//c.forEach
fruits.forEach(function(fruit,index){
    console.log(fruit,index);
});
fruits.forEach((fruits,index)=>console.log(fruits,index));


//4.Addtion,deletion,copy
//push: add an item to the end
fruits.push('π','π');
console.log(fruits);

//pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift: add an item to the begining
fruits.unshift('π','π');
console.log(fruits)

//shift: remove an item from the begining
fruits.shift();
fruits.shift();
console.log(fruits);

//note!! shift,unshift are slower than pop,push
//splice:remove an item by index position
//splice(start_number,how_many);
//splice(start_number,how_many,add_data);
fruits.push('π','π','π','π');
console.log(fruits);
fruits.splice(3,2);
console.log(fruits);
fruits.splice(1,1,'π₯','π');
console.log(fruits);

//combine two arrays
const fruits2 = ['π₯₯','π₯'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


//5. Searching
//find the index
console.clear();
console.log(fruits);
//indexOf: find the index
console.log(fruits.indexOf('π'));
console.log(fruits.indexOf('π'));
console.log(fruits.indexOf('π')); //λ°°μ΄μμ κ°μ΄ μμΌλ©΄ return -1
//includes: 
console.log(fruits.includes('π'));
console.log(fruits.includes('π')) //false
//lastIndexOf
console.clear();
fruits.push('π');
console.log(fruits);
console.log(fruits.indexOf('π')); 
console.log(fruits.lastIndexOf('π'));

//find Array API and read