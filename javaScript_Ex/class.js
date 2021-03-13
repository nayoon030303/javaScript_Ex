'use strict';
//class template
//object: instance of class
//JavaScript calss
//- ES6에 추가되었다.
// syntactical sugar over prototype-based inheritance

//1.Class declarations
class Person{
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //method
    speak(){
        console.log(`${this.name},${this.age}`);
    }
}

const nayoon = new Person('nayoon',19);
console.log(nayoon.name);
console.log(nayoon.age);
nayoon.speak();

//2. Getter and Setter
class User{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age(){
        return this._age;
    }
    set age(value){
        this._age = value<0 ? 0 : value;
    }
}

const user1 = new User('Nayoon','Kim',-1);
console.log(user1.age);

//3.Fields(public,private)

class Experiment{
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);//undefiend

//4.Static properties and methods
class Student{
    static SchoolName = 'Mirim';
    constructor(name){
        this.name = name;
    }

    static PrintSchoolName(){
        console.log(Student.SchoolName);
    }
}

const student1 = new Student('namirim');
const student2 = new Student('gamirim');
console.log(student1.SchoolName);//undefiend
console.log(Student.SchoolName);
Student.PrintSchoolName();


//5.Inheritance(상속))
class Shape{
    constructor(width,height,color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(){
        console.log(`drawing ${this.color}`);
    }

    getArea(){
        return this.width*this.height;
    }
}

class Rectangle extends Shape{}
class Triangle extends Shape{
    draw(){
        super.draw();
        console.log('삼각삼각');
    }
    getArea(){
        return this.width*this.height/2;
    }   

    toString(){
        return 'Triangle'
    }
}

const rectangle = new Rectangle(20,20,'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20,20,'red');
triangle.draw();
console.log(triangle.getArea());

//6.Class checking: instanceof
console.log(rectangle instanceof Rectangle); //true
console.log(triangle instanceof Rectangle); //false
console.log(triangle instanceof Triangle); //true
console.log(triangle instanceof Shape); //true
console.log(triangle instanceof Object);//true
console.log(triangle.toString());

