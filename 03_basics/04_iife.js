// Immediately invoked Function Expressions

(function chai(){
    console.log("DB Connected");
})();  // it save from global scope pollution(variables , declaration)

((name) => {
    console.log(`DB Connected Two ${name}`);
})(`Parth`);