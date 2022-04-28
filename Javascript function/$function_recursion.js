/** ######################### Recursion #########################
 * * When a function solves a task, in the process it can call many other functions. A partial case of this is when a function calls itself. That’s called recursion.
 */

function power(x, n) {
  if (n === 1) {
    return x;
  } else {
    return x * power(x, n - 1);
  }
}

console.log(power(3, 2));
console.log(power(2, 2));
console.log(power(3, 1));

// * The maximal number of nested calls (including the first one) is called recursion depth.

var result = 0;

var n = 3;
for (let i = 0; i <= n; i++) {
  result += i;
}
console.log(result);

function sum(n) {
  if (n === 0) {
    return 0;
  } else {
    return sum(n - 1) + n;
  }
}
console.log(sum(3));

// how it works

// 👉 sum(3) => sum(3-1) + 3
// 👉 sum(2) => sum(2-1) + 2 + 3
// 👉 sum(1) => sum(1-1) 1 + 2 + 3
// 👉 sum(0) => 0 + 1 + 2 + 3

//* Recursive traversals
let company = {
  sales: [
    {
      name: "John",
      salary: 1000,
    },
    {
      name: "Alice",
      salary: 1600,
    },
  ],

  development: {
    sites: [
      {
        name: "Peter",
        salary: 2000,
      },
      {
        name: "Alex",
        salary: 1800,
      },
    ],

    internals: [
      {
        name: "Jack",
        salary: 1300,
      },
    ],
  },
};

function sumSalary(department) {
  if (Array.isArray(department)) {
    return department.reduce((prev, cur) => prev + cur.salary, 0);
  } else {
    let sum = 0;
    for (const subdepartment of Object.values(department)) {
      sum += sumSalary(subdepartment);
    }
    return sum;
  }
}

console.log(sumSalary(company));

//* Fibonacci Numbers
// fibonacci numbers => Fn = Fn-1 + Fn-2

function fib(n) {
  if (n <= 1) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

console.log(fib(7));
