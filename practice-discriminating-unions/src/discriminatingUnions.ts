/* eslint-disable @typescript-eslint/no-unused-vars */
interface MovingThing {
  speed: number;
}

// Add the necessary properties to allow for discriminating unions
interface Car extends MovingThing {
  type: 'Car';
  wheels: number;
}
interface Boat extends MovingThing {
  type: 'Boat';
  drag: number;
}
interface Plane extends MovingThing {
  type: 'Plane';
  drag: number;
  engines: number;
}
interface Train extends MovingThing {
  type: 'Train';
  cars: number;
  wheels: number;
}

type Vehicle = Car | Boat | Plane | Train;

// Without changing the parameter type, use discriminating unions
// to fix the type errors
function speed(vehicle: Vehicle) {
  console.log(vehicle.speed);
}
function wheelCount(vehicle: Vehicle) {
  if (vehicle.type === 'Car' || vehicle.type === 'Train')
    console.log(vehicle.wheels);
}
function dragAmount(vehicle: Vehicle) {
  if ('drag' in vehicle) console.log(vehicle.drag);
  // If its only one property that is being accessed inside the function, we can use 'in' operator.
  // But if we are accessing multiple properties that are not common in all the types, we can use type property discriminating the union.
}
function numberOfCars(vehicle: Vehicle) {
  if (vehicle.type === 'Train') console.log(vehicle.cars);
}
