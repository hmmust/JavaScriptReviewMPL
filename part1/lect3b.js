const printInfo= (name,ps) => {
    ps();
    console.log(name);
    ps();
};

printInfo("Hossam", () => console.log("###########"));
printInfo("Nart", () => console.log("----------"));