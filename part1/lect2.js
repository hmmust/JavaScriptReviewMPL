let grades = [25,21,25,20,18,26];
grades[10]= 29;
console.log(grades.indexOf(19));
console.log(grades.find((value)=>{
 return value >=20;
}));

for(let i =0;i<grades.length;i++)
    console.log(grades[i]);

for(let v of grades)
    console.log(v);

grades.forEach((value)=>{
console.log(value);
});
