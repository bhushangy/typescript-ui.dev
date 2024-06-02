// Here typescript infers the type of fruitName as string since it is assigned a string value.
// Hnece you do not have to add any explicit type annotation like :string.
let fruitName = 'Bhushan';

// Here, typescript complains that the type of fruitName is string and it cannot be assigned a number.
fruitName = 123;

// noImplicitAny: true
// The above config does not allow any type to be implicitly inferred as any.
// Hence, the below code will throw an error as the type of name is not explicitly mentioned and
// there is no way for typescript to infer the type of name.
function printName(name) {
  console.log(name);
}
