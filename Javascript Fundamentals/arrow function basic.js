/**
 * *---------------------- Arrow function ----------------------
 *
 * * An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.
 */

// syntax : let a = (a,b)=>{}

// no parameters

var sum = () => {
  console.log("Hello");
};

// single parameters (no parentheses need)

var sum = z => {
  console.log(z);
};
sum(10)

// single line statements (no need return keyword and curly braces)

var sum = z => z;
console.log(sum(25));

var sum = z =>{
    x = z + 25;
    return x + z
}

console.log(sum(20));