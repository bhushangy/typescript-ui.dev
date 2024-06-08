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

// Also, if we are passing an object with many properties to our function, we only need to
// annotate the object properties that are used in the function. Take a look at this example:

const fruit = {
  name: 'Apple',
  color: 'red',
  sweetness: 80,
};

function getFruitName({ name }: { name: string }) {
  return name;
}

const name_is = getFruitName(fruit);

// Even though our parameter is expecting an object with only the name property,
// we can still pass it an object with more properties, so long as it includes name.

// Typing function expressions

function mapNumberToNumber(list: number[], callback: (item: number) => number) {
  // Here type of callback is function which takes a number and returns a number.
  // The name of parameter in the callback function does not matter. It can be anything.
}

// Type narrowing

// we can convince TypeScript that an unknown or any value actually has a more specific type by using a process called type narrowing.
// This involves doing runtime checks which either prove that a value is a specific type or prove that it is not a specific type.

const unknownNumber: unknown = 27;

let theAnswer: number = 0;
if (typeof unknownNumber === 'number') {
  theAnswer = 15 + unknownNumber;
}

// If you remove the if block, typescript will throw an error as the type of unknownNumber is unknown and it cannot be assigned to a number.

// You should always prefer using unknown instead of any if you have the time to add the necessary runtime checks.

async function getFruitList() {
  const response = await fetch('https://example.com/fruit');
  const fruitList = await response.json();
  return fruitList;
}

// fruitList is of type any. Hence, return type of function is Promise<any>

// Indexable Types

interface Fruit {
  [key: string]: string;
  name: string;
  // calories: number; // This is not allowed as the index signature is already defined.
  stringCalories: string; // allowed as it is of type string
}

let myApple: Fruit = {
  name: 'Apple',
  ripeness: 'overripe',
  stringCalories: '95',
  sdcds: 'sdcds', // This is allowed as the index signature is defined.
};

// So myApple can have any property as long as it is of type string and it also must contain the name property and stringCalories property.

interface EdibleThing {
  name: string;
}

interface Apple extends EdibleThing {
  color: string;
}

const apple2: Apple = { name: 'Apple', color: 'red' };

const foodBasket: EdibleThing[] = [];
foodBasket.push(apple2);

// Since FoodBasket is of type EdibleThing[], it only checks for the name property in the object.
// It does not check for the color property. So it does not matter if the object has color property or not.

const apple3: EdibleThing = { name: 'Apple', color: 'red' };
// The above code will throw an error as the color property is not allowed in EdibleThing.
// So clearly, assigning an object literal to a type is not allowed if the object literal has extra properties.

const apple4: EdibleThing = apple2;
// The above code is allowed as apple2 is of type Apple which extends EdibleThing.
// So clearly, assigning an object already created of a subtype to a supertype is allowed.
