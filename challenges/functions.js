// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function consume(par1, par2, callback) {
  return callback(par1, par2);  
}


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function greeting(firstName, lastName) {
  return `Hello ${firstName} ${lastName}, nice to meet you!`;
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


console.log('==== Closures ==== ');

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
// A function can access all variables defined inside the function
// all functions have access to the scope above them, this is called JavaScript closure.
// nestedFunction can access to `internal` because myFunction is the parent of nestedFunction. nestedFunction has outside scope from it's parent. Functions can
// access outside scope but if there were a variable inside nestedFunction myFunction 
// couldn't access to nestedFucntion's scope.
// We're also invoking nestedFunction inside myFunction, if not it would not work

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();




console.log('');
console.log('**************** End of functions ******************');

//EOF