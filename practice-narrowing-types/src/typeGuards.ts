/* eslint-disable @typescript-eslint/no-unused-vars */
// Without changing the input or return types of the functions, fix all of the TypeScript errors with type narrowing
// If the input is an invalid type, feel free to throw an error in your function.
function doubleIfNumber(input: unknown) {
  if (typeof input === 'number') return input * 2;
}

function combineValues(input1: unknown, input2: unknown): string | number {
  if (typeof input1 === 'string' && typeof input2 === 'string')
    return input1 + input2;
  if (typeof input1 === 'number' && typeof input2 === 'number')
    return input1 + input2;
  throw new Error('Invalid input');
}

function appendToArray(list: unknown, input: unknown): string[] {
  if (!Array.isArray(list)) return [];

  const filteredList = [];
  for (const item of list) {
    if (typeof item === 'string') {
      filteredList.push(item);
    }
  }
  return filteredList.concat(String(input));
}

function sumArray(list: unknown) {
  if (!Array.isArray(list)) {
    throw new Error('Invalid input !! list is not an array');
  }

  // const listOfNumbers = list.filter((item) => typeof item === 'number');
  // listOfNumbers is still an array of any time inspite of filtering non numbers
  // But it works in a traditional for loop below
  const listOfNumbers = [];
  for (const item of list) {
    if (typeof item === 'number') {
      listOfNumbers.push(item);
    }
  }
  return listOfNumbers.reduce((accumulator, item) => accumulator + item, 0);
  //   const res: number = list.reduce((accumulator: number, item: number) => {
  //     if (typeof item === 'number') {
  //       return accumulator + item;
  //     }
  //   }, 0);
  // Checking for type of item in reduce function will also not work as return type is still inferred as any
}

// The type of "sum" should not be "any"
const sum = sumArray([1, 2, 3]);

interface Fruit {
  name: string;
  color?: string;
  eat?: () => void;
}
function shoutFruitName(fruit: object | Fruit) {
  if ('name' in fruit && typeof fruit.name === 'string') {
    console.log(fruit.name.toUpperCase());
  }
}

function shoutFruitColor(fruit: Fruit) {
  console.log(fruit.color?.toUpperCase());
}

function eatFruit(fruit: Fruit) {
  fruit.eat?.();
}

export {};
