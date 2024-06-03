// /* eslint-disable @typescript-eslint/no-unused-vars */
// // Adding Type Annotations
// // Replace the `unknown` type annotations with the correct type
// let guestCount: unknown = 50;

// let favoriteDessert: unknown = "Cheesecake";

// const ingredients: unknown = [
//   "butter",
//   "flour",
//   "baking powder",
//   "sugar",
//   "eggs",
//   "vanilla",
//   "salt"
// ];

// // Correcting Variable Values
// const menu: {
//   courses: number;
//   veganOption: boolean;
//   drinkChoices: string[];
// } = {
//   courses: 5,
//   veganOption: true
// };

// // Function Annotation
// const apple = {
//   name: "Apple",
//   color: "red",
//   sweetness: 80
// };

// function eatFruit(fruit: unknown) {
//   if (fruit.name === "Apple") {
//     console.log("I love apples!");
//   }
//   console.log("Fruit is very tasty.");
// }

// eatFruit(apple);

// function transformFruit(fruitList: unknown, transformFunction: unknown) {
//   return fruitList.map(transformFunction);
// }

// const fruitList = ["Apple", "Banana", "Orange"];

// function bakeFruit(fruitName: unknown) {
//   return `Baked ${fruitName}`;
// }

// const bakedFruit = transformFruit(fruitList, bakeFruit);

// Let typescript infer the type from the value assigned
let guestCount = 50;

let favoriteDessert = 'Cheesecake';

const ingredients = [
  'butter',
  'flour',
  'baking powder',
  'sugar',
  'eggs',
  'vanilla',
  'salt',
];

// Correcting Variable Values
const menu: {
  courses: number;
  veganOption: boolean;
  drinkChoices: string[];
} = {
  courses: 5,
  veganOption: true,
  drinkChoices: ['water', 'lemonade', 'soda'],
};

// Function Annotation
const apple = {
  name: 'Apple',
  color: 'red',
  sweetness: 80,
};

function eatFruit(fruit: { name: string }) {
  // You need not add all the properties of the fruit object. Only the properties that are used in the function is enough for type safety.
  if (fruit.name === 'Apple') {
    console.log('I love apples!');
  }
  console.log('Fruit is very tasty.');
}

eatFruit(apple);

function transformFruit(
  fruitList: string[],
  transformFunction: (item: string) => string
  // bakeFruit is the transformFunction. Here name of parameter item does not matter. Its only the type of parameter that matters.
) {
  return fruitList.map(transformFunction);
}

const fruitList = ['Apple', 'Banana', 'Orange'];

function bakeFruit(fruitName: string) {
  return `Baked ${fruitName}`;
}

const bakedFruit = transformFruit(fruitList, bakeFruit);
