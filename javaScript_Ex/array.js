'use strict';

//Array

//1.Array declare
const arr1 = new Array();
const arr2 = [1,2];

//2/Index position
const fruits = ['🍓','🍌'];
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
fruits.push('🍈','🍑');
console.log(fruits);

//pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift: add an item to the begining
fruits.unshift('🍈','🍑');
console.log(fruits)

//shift: remove an item from the begining
fruits.shift();
fruits.shift();
console.log(fruits);

//note!! shift,unshift are slower than pop,push
//splice:remove an item by index position
//splice(start_number,how_many);
//splice(start_number,how_many,add_data);
fruits.push('🍈','🍑','🍍','🍉');
console.log(fruits);
fruits.splice(3,2);
console.log(fruits);
fruits.splice(1,1,'🥝','🍇');
console.log(fruits);

//combine two arrays
const fruits2 = ['🥥','🥑'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


//5. Searching
//find the index
console.clear();
console.log(fruits);
//indexOf: find the index
console.log(fruits.indexOf('🍓'));
console.log(fruits.indexOf('🍉'));
console.log(fruits.indexOf('🍑')); //배열안에 값이 없으면 return -1
//includes: 
console.log(fruits.includes('🍓'));
console.log(fruits.includes('🍑')) //false
//lastIndexOf
console.clear();
fruits.push('🍓');
console.log(fruits);
console.log(fruits.indexOf('🍓')); 
console.log(fruits.lastIndexOf('🍓'));

//find Array API and read