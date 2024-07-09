// Generics

// You can create generic type aliases, generic interfaces, functions that take and return generic types, generic classes

// You can use class definition as a type just like an interface.
// Interfaces and classes are both types in TypeScript. They can be used interchangeably in many cases.

// See the wildcards T, U, TState can be literally anything unless there is a constraint on them or there is a default value.
// If there is a default value, then the type of the default value is the type of the generic.


// Interfaces are capable of describing the wide range of shapes that JavaScript objects can take. In addition to describing an object with properties, interfaces are also capable of describing function types.

// To describe a function type with an interface, we give the interface a call signature. This is like a function declaration with only the parameter list and return type given. Each parameter in the parameter list requires both name and type.

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;

mySearch = function (source: string, subString: string): boolean {
  let result = source.search(subString);
  return result > -1;
};
