let set = new Set();

let john = {name: "John"};
let nayoon = {name: "Nayoon"};
let mary = {name:"Marry"};

set.add(john);
set.add(nayoon);
set.add(mary);

console.log(set);

set.add(nayoon);

console.log(set);

console.log(set.size); //3

for(let users of set){
    console.log(users.name);
}