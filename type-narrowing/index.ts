/* Type Guards */

// Type guards are a way to narrow down a broader type like a union or an unknown type within a conditional block.
// You can make use of javascript operators like typeof, instanceof (when you are passing an object of a certain class), in, etc. to narrow down the type of a variable at runtime.
// See lesson for examples for primitive types.
// When it comes to narrowing types for arrays or objects, yuo have to be a little careful.
// Because typeof array is object and typeof object is object.
// So you need to use Array.isArray() to check if a variable is an array.
// Now what about the types of the elements inside the array?
// While mapping through the array, you can use a type guard to check the type of each element.

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

sayNameLoud3({ age: 27 });
sayNameLoud3([]); // Can be any object
export { };

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
let fruitName: number = "banana" as number;

// See lesson for assertions signatures for dom elements with intersection types.
// Suppose you have a type A and another type B that are closely related. Now you are trying to assign a variable to type A. But you know that the variable is of type B.
// Now how do you assign the variable to type A without changing the type of the variable B ?
// You can use intersection types to do this. i.e A & {commonProperty: string} will give you a type that has all the properties of A and also the commonProperty property of B.

// See lesson for converting element from one DOM type to another using assertion signatures.

const anchor = document.createElement('a');
anchor as HTMLElement as HTMLButtonElement;
// HTMLElement is the parent of both HTMLAnchorElement and HTMLButtonElement. So we can convert anchor to HTMLButtonElement.
