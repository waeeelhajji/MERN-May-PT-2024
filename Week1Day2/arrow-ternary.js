//!-------Arrow Function

function hello(someNAme) {
    return "hello" + someNAme
}


const helloAgain = (someNAme) => {
    //if
    //For
    // if
    return "hello" + someNAme
}

//Short way
const AnotherHello = someNAme =>  "bob" === someNAme

console.log(
    AnotherHello("bob")
)


// ternary 3
// binary 2
// decimal 10
// hexadecimal 16

const age = 20
if (age >= 18) {
    return "you may pass"
} else {
    return "you need more xp"
}
// ternary -ES6

age >= 18 ? "you may pass" : "you need more xp"