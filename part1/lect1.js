let names= Array('Rania','Nart','Saleh','Laith');
//let names2= ['Rania','Nart','Saleh','Laith'];
//names[5]= "Ahmad";
names.push("Ahmad");
console.log(names);
let names2=['Saed','Wesam','Mutaz','Tareq'];

//let students = names.concat(names2);
let students = [...names,...names2,'Yousef'];
students.sort();
students.reverse();

console.log(students.slice(-1));