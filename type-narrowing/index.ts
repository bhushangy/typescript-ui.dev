/* Type Guards */

// Type guards are a way to narrow down a broader type like a union or an unknown type within a conditional block.
// You can make use of javascript operators like typeof, instanceof (when you are passing an object of a certain class), in, etc. to narrow down the type of a variable at runtime.
// See lesson for examples for primitive types.
// When it comes to narrowing types for arrays or objects, u have to be a little careful.
// Because typeof array is object and typeof object is object.
// So you need to use Array.isArray() to check if a variable is an array.
// Now what about the types of the elements inside the array?
// While mapping through the array, you can use a type guard to check the type of each element.


// Arrays - See example in lesson on how to narrow down the type of elements in an array.

// Class - For classes, you can use the instanceof operator to check if an object is an instance of a class.
// You cannot use typeof operator for classes because typeof returns object for classes.
// i.e function a(fruit: unknown) {}
// if (typeof fruit === 'Fruit') {} // This is wrong. typeof returns object for classes instances. Then you can pass objects of any class here.
// if (fruit instanceof Fruit) {} // This is correct.



// Objects

// Objects are a little trickier to narrow, since they could have any combination of properties and types.
// in operator is only usedul when we know that person is an object.
function sayNameLoud(person: unknown) {
    if ('name' in person) {
      console.log(person.name.toUpperCase());
      return;
    }
  }
  
  // Instead, we'll have to use another special type that comes with TypeScript: object.
  // This type represents anything that isn't a string, number, boolean, or one of the other primitive types.
  // Using object instead of unknown will tell TypeScript to let us attempt to access properties on this value.
  
  function sayNameLoud2(person: object) {
    if ('name' in person && typeof person.name === 'string') {
      console.log(person.name.toUpperCase());
      return;
    }
  }
  
  // Or you can create an interface with required properties and use that as the type of the parameter.
  
  interface Person {
    name: string;
    age: number;
  }
  function sayNameLoud3(person: object | Person) {
    if ('name' in person) {
      console.log(`Hey, ${person.name.toUpperCase()}`);
    }
  }
  
  sayNameLoud3({ age: 27, gender: 'm' }); // Since it can be any object, adding any other property like gender that is not there is Person will not throw an error.
  sayNameLoud3([]); // Can be any object
  export {};
  
  /* Handling null and undefined */
  
  // Use optional chaining to handle null and undefined values.
  // To assign default values to variables that might be null or undefined, you can use the nullish coalescing operator (??).
  // Use non null assertion operator (!) when you are sure that a variable is not null or undefined at your own risk.
  
  async function makeAPIRequest(url: string, log?: (message: string) => void) {
    // Optional chaining can be used to conditional execute functions.
    log?.('Request started.');
    const response = await fetch(url);
    const data = await response.json();
  
    log?.('Request complete.');
  
    return data;
  }
  
  /* Assertion signatures */
  
  // TypeScript knows the types which are returned by document.getElementById and canvas.getContext, so we should be able to use them without applying any type annotations.
  
  const canvas = document.getElementById('canvas'); // Type here is HTMLElement and not HTMLCanvasElement. But we know that it is a canvas element. Its just that TypeScript doesn't know it.
  const context = canvas.getContext('2d');
  
  // To assert to the type checker that a value has a specific type, we just append the keyword as, followed by the type we want to assert. This tells the TypeScript type checker that a certain value is in fact the type we say it is.
  
  const canvas2 = document.getElementById('canvas') as HTMLCanvasElement;
  const context2 = canvas2.getContext('2d');
  
  // Any time we do this, we run the risk of being wrong and creating type errors which the type checker can't catch for us.
  
  // Note that the type checker will verify that the type we are asserting is at least similar to the original type.
  let fruitName: number = 'banana' as number;
  
  // See lesson for assertions signatures for dom elements with intersection types.
  // Suppose you have a type A and another type B that are closely related. Now you are trying to assign a variable to type A. But you know that the variable is of type B.
  // Now how do you assign the variable to type A without changing the type of the variable B ?
  // You can use intersection types to do this. i.e A & {commonProperty: string} will give you a type that has all the properties of A and also the commonProperty property of B.
  
  // See lesson for converting element from one DOM type to another using assertion signatures.
  
  const anchor = document.createElement('a');
  anchor as HTMLElement as HTMLButtonElement;
  // HTMLElement is the parent of both HTMLAnchorElement and HTMLButtonElement. So we can convert anchor to HTMLButtonElement.
  
  /* Structural vs Nominal Types */
  
  // What is structural vs nominal typing ?
  
  // https://claude.ai/chat/7cb03221-aef7-45a7-8fb4-c80b553567e9 - Refer to this explanation by claude for the above question.
  
  // In languages like Java and C#, the type system is nominal. Meaning if you have 2 objects of class Person and Animal,
  // you cannot assign object of person to animal even if they have the same shape. But in Typescipt, you can, since the type system is structural.
  // It only checks for the shape of the object. This is flexible and is more error prone than nominal typing.
  
  /* Discriminated Unions */
  
  // Suppose we have a type that is a union of multiple types. How do we narrow down the type of a variable that is of this union type ?
  
  interface Fruit {
    name: string;
    color: string;
    juice: () => void;
  }
  
  interface Vegetable {
    name: string;
    color: string;
    steam: () => void;
  }
  
  type EdibleThing = Fruit | Vegetable;
  
  function prepareEdibleThing(food: EdibleThing) {}
  
  // To execute the method on the food variable, we need to know which type it is. Fruit or Vegetable.
  // This is where Discriminating Unions come into play. We can create a Discriminating Union by adding
  // literal type properties to the interfaces which are part of the union. We can then check that individual property to see what type represents the value.
  
  // So it is that unique property on each type that discriminates between the different types in the union.
  
  // See lesson for example of discriminated unions.
  
  /* User desfined type guards */
  // https://chatgpt.com/c/fe9e4ce6-f97e-48ca-b199-9cee150cc4b3 - Refer to this explanation by chatgpt for the above question.
  // Read lesson for more examples.
  
  // User defined type guards are functions that allow us to have complicated logic to check if a variable is of certain type or 
  // reuse the complicated type checking logic during run time in multiple places.
  // Another scenario is when you are getting the types from a third party library and you want to add your own type guards to it since you cannot modify the original types.
  
  // A user defined type guard is a function that takes at least one argument, returns a boolean, and has a type predicate return signature. This is a special type signature which says "this value is most certainly this type".
  
  // A type predicate signature is needed, because typescript does not a=consider the boolean returned from the type guard function as a type guard. It needs a type predicate signature to know that the type guard narrows down the type of the variable.
  
  interface Fruits {
    name: string;
    color: string;
    sweetness: number;
  }
  interface Vegetables {
    name: string;
    color: string;
    tenderness: number;
  }
  
  function isFruit(maybeFruit: Fruits | Vegetables): maybeFruit is Fruits {
    if ('tenderness' in maybeFruit) return true;
    return false;
  }
  
  const tomato = { name: 'Tomato', color: 'red', tenderness: 70 };
  if (isFruit(tomato)) {
    console.log(`Tomato is ${tomato.sweetness}% sweet.`);
  } else {
    console.log(`Tomato is ${tomato.tenderness}% tender.`);
  }
  
  // If we remove is Fruit type predicate, then we will get an error saying that tomato.sweetness does not exist on type Fruits | Vegetables.
  // This is because typescript does not care about the return type of the type guard function. It needs a type predicate signature.
  
  // Our type predicate, maybeFruit is Fruit, tells us that if this function returns true, then maybeFruit is definitely a Fruit.
  
  // SO BOTTOM LINE. WE ARE PASSING THIS TYPE GUARD FUNCTION A COUPLE OF TYPES OR A UNION OF TYPES AND NARRROWING IT DOWN TO A SINGLE TYPE.
  // 
  
  // See and read lesson for more examples of user defined type guards.
  
  // Assertion Functions
  
  // See lesson for assertion functions.
  
  // Both Assertion Functions and Type Predicates allow us to write functions which assert or prove something about the types of
  // the values which are passed into them, giving us more flexibility with how we perform runtime type checks of our values.
  
  // I think it's important to note that we are doing a runtime check here and not type narrowing. TypeScript does not know if maybeFruit is Fruit until it runs the assertIsFruit function — at runtime.
  export {};
  