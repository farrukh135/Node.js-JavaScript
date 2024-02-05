// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('FARRUKH')


// Global Scope pollution is a problem many times, so we use IIFE to remove any global scope variables and declarations.
