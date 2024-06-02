// Here typescript infers the type of fruitName as string since it is assigned a string value.
// Hnece you do not have to add any explicit type annotation like :string.
let fruitName = 'Bhushan';

// Here, typescript complains that the type of fruitName is string and it cannot be assigned a number.
fruitName = 123;

// noImplicitAny: true
// The above config does not allow any type to be implicitly inferred as any.
// Hence, the below code will throw an error as the type of name is not explicitly mentioned and
// there is no way for typescript to infer the type of name.
function printName(name) {
  console.log(name);
}

// Typing function declarations

// We can also mark parameters as optional by giving them a default value.
// TypeScript will infer the type of the parameter from the default value.

function logOutput(message: string, yell = true) {
  // function logOutput(message: string, yell?: boolean) { // This is also correct and more explicit and clear that yell is optional.
  if (yell) {
    console.log(message.toUpperCase());
    return;
  }
  console.log(message.toUpperCase());
}

logOutput('Hey! Listen!'); // "HEY! LISTEN!"

// Rest Parameters

// When we aren't sure how many parameters will be passed to a function, we can use the ... rest syntax,
// which gives us all of the parameters in a list.
// If all of the extra parameters are the same type, we can easily add an annotation to the spread parameters.

function logManyOutput(...messages: string[]) {
  messages.forEach((message) => {
    logOutput(message);
  });
}

