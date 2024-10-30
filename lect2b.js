const Nart={
    fullname:"Nart Zoqash",
    age:22,
    graduated:false,
    address:{city:"Amman",area:"Wadi AlSir"},
    hobbies:["Wrestling","Football"]
};
console.log(Nart.fullname);
console.log(Nart['fullname']);
Nart.age= 22.5;
console.log(Nart.address.area);
console.log(Nart.hobbies[0]);
delete Nart.age;
// for(let k in Nart)
//     console.log(k,Nart[k]);

// for(let [k,v] of Object.entries(Nart))
//     console.log(k,v);
//console.table(Nart);
