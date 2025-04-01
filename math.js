
// learn module 

function add(a, b) {

    return a + b;

}

function sub(a, b) {
    return a - b;
}

// =========================================== or  ===============================================


// it's amnather function prosses 
multiply = (a, b) => a * b
devide = (a, b) => a / b
// expost this ================
// module.exports = add;  ==> this is use for 1 function 
module.exports = {
    addthis: add,
    subthis: sub,
    multiply,
    devide
}

