import { mountains, findNameOfTallestMountain } from "./mountains";
import { products, calcAverageProductPrice } from "./products";
import { calcInventoryValue, inventory } from "./inventory";

//example of interface inside another interface
// purpose is to descibe objects in objects
interface Person {
  name: string;
  age: number;
}
interface Family {
  parent1: Person;
  parent2: Person;
  sibling1?: Person;
  sibling2?: Person;
}
//object inside of an object
const andreasFamily: Family = {
  parent1: {
    name: "Julie",
    age: 57,
  },
  parent2: {
    name: "Mike",
    age: 57,
  },
  sibling1: {
    name: "Erik",
    age: 32,
  },
};

const tallestMountain: string = findNameOfTallestMountain(mountains);
console.log(tallestMountain);
// console(findNameOfTallestMountain());

const returnValue: number = calcAverageProductPrice(products);
console.log(returnValue);

const sumOfAllInventoryItems: number = calcInventoryValue(inventory);
console.log(sumOfAllInventoryItems);
