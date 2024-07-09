/* eslint-disable @typescript-eslint/no-unused-vars */
// Change these functions into generic functions by altering the
// type signatures. There should be no `unknown` types when you are done
function randomFromList<T>(list: T[]) {
  const length = list.length;
  const index = Math.floor(Math.random() * length);
  return list[index];
}
// Here T is the type of item inside the list and not the list itself.
// In the above function return type has to be the same type as the generic type T because we are returning an element from the list which is of type T.

function duplicateList<T>(list: T[], count: number = 1) {
  let output: T[] = [];
  for (let i = 0; i < count; i++) {
    output = output.concat(list);
  }
  return output;
}

function createTuple<T, U>(item1: T, item2: U): [T, U] {
  return [item1, item2];
}

createTuple('asaxsax', 'sdsc');
// Note here that both T and U are strings.
// It is not necessary that T and U should be of different type. They can be of the same type as well. They can be of any type.

// Use the following interface to constrain the generic in the next function
interface Length {
  length: number;
}
function getLength<T extends Length>(item: T): number {
  return item.length;
}

// When u say T extends Length, you are essentially saying that T should be an object that has a length property.
