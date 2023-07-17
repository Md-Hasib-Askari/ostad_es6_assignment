// =============== PART A =================

// Snippet 1: =================================
const add = (a, b) => {
    return a + b;
};

const result1 = add(3, 4);

// Question 1: What is the value of the result1?
// Ans: 7


// Snippet 2: =================================
const greet = (name) => {
    return {name};
};

const message = greet("Alice");

// Question 2: What is the value of the message?
// Ans: "Alice"


// Snippet 3: =================================
const calculateArea = (radius) => {
    const PI = 3.14159;
    const area = PI * radius * radius;
    return area;
};

const area = calculateArea(5);

// Question 3: What is the value of area?
// Ans: 78.53975


// Snippet 4: =================================
const multiply = (a, b) => a * b;
const result2 = multiply(2, 5);

// Question 4: What is the value of the result2?
// Ans: 10


// Snippet 5: =================================
const isEven = (num) => {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

const evenNumber = isEven(8);

// Question 5: What is the value of evenNumber?
// Ans: true



// Snippet 6: =================================
const sayHello = () => {
    return "Hello!";
};

const hello = sayHello();

// Question 6: What is the value of hello?
// Ans: "Hello!"



// Snippet 7: =================================
const calculateSquare = (num) => num * num;
const squaredNumber = calculateSquare(4);

// Question 7: What is the value of squaredNumber?
// Ans: 16



// Snippet 8: =================================
const divide = (a, b) => {
    if (b === 0) {
        return "Error: Division by zero.";
    }
    return a / b;
};

const result3 = divide(10, 2);
const result4 = divide(8, 0);

// Question 8: What are the values of result3 and result4?
// Ans: result3 = 5, result4 = "Error: Division by zero."