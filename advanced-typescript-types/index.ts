// Typescript Operators - typeof, keyof, const assertions

// TypeScript gives us a few operators apart from | and & which we can use to transform types
// and even derive types from values assigned to variables.

/* Type Indexed Access */

// Using Type Indexed Access, we can grab any type from any property of any other type.

// See lesson for examples

/* typeof */

// Sometimes we might want to use the type of some runtime value to represent the type of another thing.
// This could be especially helpful when the type was inferred by TypeScript.

let rectangle = { width: 100, height: 200 }; // type is inferred here
let rectangle2: rectangle; // Type Error: 'rectangle' refers to a value,

// Just like we can use the typeof operator in JavaScript to check the type of something at runtime,
// we can use the typeof operator to derive the type of a value at compile time.

rectangle2: typeof rectangle; // { width: number; height: number; }

export {};
