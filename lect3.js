const isEven = n =>  n%2==0; 
const maxNumber =  (...n) => {
    let m = n[0];
    for(let e of n)
        if(m <e)
            m=e;
    return m;
}


const NumbersOperations =  (check,...n) => {
    let m = n[0];
    for(let e of n)
        if(check(m,e))
            m=e;
    return m;
}
console.log(isEven(15));
console.log(maxNumber(15,16,12,11,19));
console.log(NumbersOperations( (a,b) => a<b ,15,16,12,11,19));
console.log(NumbersOperations( (a,b) => a>b ,15,16,12,11,19));