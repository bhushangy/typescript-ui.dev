export class Fruit {
  constructor(
    public name: string,
    protected sweetness: number = 50,
    private isEdible: boolean = true
  ) {}

  get tasty() {
    return this.sweetness > 50;
  }

  static cook(fruit: Fruit) {
    return `Cooked fruit ${fruit.name}`;
  }
}

export class Apple extends Fruit {
  constructor(public variety: string) {
    super('Apple');
  }
}

// If you do not pass anything to sweetness or isEdible, it will be 50 and true by default.
const fruit = new Fruit('Apple');
console.log(fruit);

// Fruit: {
//   "name": "Apple",
//   "isEdible": true,
//   "sweetness": 50
// }

// #isEdible: boolean;
// constructor(
//   public name: string,
//   protected sweetness: number = 50,
//   isEdible: boolean = true
// ) {
//   this.#isEdible = isEdible;
// }

// Fruit: {
//   "name": "Apple",
//   "sweetness": 50
// }
