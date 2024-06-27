/* eslint-disable @typescript-eslint/no-unused-vars */
interface Fruit {
  name: string;
  sweetness: number;
  color: unknown;
}

// Add the necessary return types and implementation for these
// user-defined type guards
function isString(maybeString: unknown): maybeString is string {
  return typeof maybeString === 'string';
}

function isFruit(maybeFruit: unknown): maybeFruit is Fruit {
  if (typeof maybeFruit === 'object' && maybeFruit) {
    // You have to check for all the props since its of unknown type
    if (
      'sweetness' in maybeFruit &&
      'color' in maybeFruit &&
      'name' in maybeFruit
    )
      return true;
  }
  return false;
}

function assertIsFruit(maybeFruit: unknown): asserts maybeFruit is Fruit {
  if (!isFruit(maybeFruit)) {
    throw new Error();
  }
}

// Don't change anything in this function
function checkFruit(fruit: unknown) {
  if (isFruit(fruit)) {
    if (isString(fruit.color)) {
      console.log(fruit.color.toUpperCase());
    }
  }

  assertIsFruit(fruit);
  console.log(`This fruit is ${fruit.name}`);
}

// Instead you can assert at the top of the function itself
// function checkFruit(fruit: unknown) {
//   assertIsFruit(fruit);

//   if (isString(fruit.color)) {
//     console.log(fruit.color.toUpperCase());
//   }

//   console.log(`This fruit is ${fruit.name}`);
// }

