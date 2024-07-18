// TS generates a .d.ts file after you compile the ts file to js file.

interface Fruit {
    isFruit: true;
    name: string;
  }
  declare class FruitBasket<T extends Fruit> {
    fruits: T[];
    constructor(fruits?: T[]);
    add(fruit: T): void;
    eat(): void;
  }
  