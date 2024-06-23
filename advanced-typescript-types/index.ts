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

/* keyof */

// If you want to extract the names of keys present in a type (not a value but type), you can use the keyof operator.
// The keyof operator to give us a type which represents all of these property names.
// In reality, it's a union type of string literals, one for each property name.

let apple = { name: 'apple', color: 'red', weight: 100 };
type AppleKeys = keyof apple; // This is wrong because apple is a value and not a type. You have to use keyof on a type.
// So, it will be keyof typeof apple

// See lesson for examples

// Combining typeof and keyof
// let rectangle = { width: 100, height: 200 }; // Inferred type
type RectangleProperties = keyof typeof rectangle; // type RectangleProperties = "width" | "height"

/* const assertions */

let square = { width: 100, height: 100 };

// Infer the type of square is { width: number; height: number; }

// But what if I want to be square of only one type, { width: 100; height: 100; }?
// i.e it is literal type with width and height as 100 and not just any number.
// We can use const assertions to achieve this.

let square2 = { width: 100, height: 100 } as const;
// Now the type of square2 is { readonly width: 100; readonly height: 100; }
// readonly makes the properties of the object immutable.

function drawRectangle(rectangle: typeof square2) {
    // Draw rectangle
}

drawRectangle({ width: 120, height: 100 });

// If we want only one of the values to be literal and the other to be any number, we can use the following syntax:
let square3 = { width: 100, height: 100 as const };
// Now the type of square3 is { width: number; height: 100; }

let message = 'Hello' as const;
// let message: "Hello"
// This is equivalent to
let message2: 'Hello' = 'Hello';
message2 = 'Yo';

// Now coming to arrays
const assortedItems = ['hello', 5, (fruit: string) => { }];
// Typescript infers the type of assortedItems as (string | number | ((fruit: Fruit) => void))[]
// But this a tupple and we want to make sure that the first element is hello, the second is 5 and the third is a function.
// We can use const assertions to achieve this.

const assortedItems2 = ['hello', 5, (fruit: string) => { }] as const;
assortedItems2[0]; // type here is "hello"
assortedItems2[1]; // type here is 5

let msg = 'hello';
let count = 5;
const assortedItems4 = [msg, count, (fruit: string) => { }] as const;

// Now the type is readonly [string, number, (fruit: string) => void]
// Because msg and count are assigned to variables, they are not inferred as literals because their values can change.

// BUT if msg and count were const, then the type would be readonly ["hello", 5, (fruit: string) => void] since their values can't change.

let assortedItems5 = ['hello', 5, (fruit: string) => { }] as const;
assortedItems5[0] = 'yo'; // Error: Cannot assign to '0' because it is a read-only property.

/* Advanced Function Typing */

// Typing this keyword in functions when they are used as methods in objects.
interface IceCreamSundae {
    baseIceCream: string;
    chocolateSyrup: number;
    cherry: boolean;
    eat: () => void;
}
const hotFudgeSundae = {
    baseIceCream: 'vanilla',
    chocolateSyrup: 5,
    cherry: true,
    eat(this: IceCreamSundae) {
        if (this.cherry) {
            this.eat();
            console.log('Mmmm. Tasty.');
        } else {
            console.log('Could be better.');
        }
    },
};

hotFudgeSundae.eat();

// What if your function parameters can be of different types and of different lengths?
// function stringOrArrayLength(input: string | unknown[], param1?:string|number):number {}
// You could simplify this by using function overloads.

function stringOrArrayLength(input: string): number;
function stringOrArrayLength(input: unknown[]): number;
function stringOrArrayLength(input: string, param1: string): number;
function stringOrArrayLength(input: string, param1: number): number;
function stringOrArrayLength(input: unknown[], param1: number): number;
function stringOrArrayLength(input: unknown[], param1: string): number;
function stringOrArrayLength(input: any): number {
    return input.length;
}

stringOrArrayLength({}); // Overload error

export { };
