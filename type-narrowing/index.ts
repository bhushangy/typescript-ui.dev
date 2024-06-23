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
