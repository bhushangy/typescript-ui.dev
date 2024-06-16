/* eslint-disable @typescript-eslint/no-unused-vars */
// Make sure you replace all of the `unknown` types with the appropriate
// union types.

// Create a union type that represents either a string or an array of strings
type StringOrStringArray = string | string[];

const fruitName: StringOrStringArray = 'Apple';
const fruitList: StringOrStringArray = ['Apple', 'Banana', 'Pear'];

// Create a union type that represents an array of numbers and strings
type NumberAndStringArray = (number | string)[];

const assortedItems: NumberAndStringArray = ['Orange', 5, 2, 'Strawberry', 1];

// Create a union type that includes literal types for the days of the week
// Don't use a string here
type DaysOfTheWeek =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';

const today: DaysOfTheWeek = 'Friday';
const tomorrow: DaysOfTheWeek = 'Saturday';

// Create a union type that includes these two interfaces
interface Fruits {
  name: string;
  sweetness?: number;
}
interface Vegetables {
  name: string;
  hasSeeds: boolean;
}
type Food = Fruits | Vegetables;

const apples: Food = { name: 'Apple', sweetness: 80 };
const onions: Food = { name: 'Vegetable', hasSeeds: false };
// Union doesn’t expect all parameters of both interfaces to be present. Only the parameters common to both interfaces should be present.

// Fix the problems in this function without changing the parameter or return types
function getSweetness(fruit?: Fruits): number {
  const sweetness = fruit?.sweetness ?? 0;
  return sweetness;
}
