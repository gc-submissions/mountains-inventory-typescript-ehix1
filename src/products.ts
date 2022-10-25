import Product from "./models/Product";

export const products: Product[] = [
  {
    name: "dog food",
    price: 19.99,
  },
  {
    name: "leash",
    price: 8.99,
  },
  {
    name: "chew toy",
    price: 5.0,
  },
];

export const calcAverageProductPrice = (array: Product[]): number => {
  let sum = 0;
  array.forEach((item) => {
    sum += item.price;
  });
  const average: number = sum / array.length;
  return +average.toFixed(2);
};

// //reduce method
// const calcAverageProductPrice2 = (array: Product[]): number => {
//   const sum: number = array.reduce((prev, cv) => {
//     // prev will return the sum back to the previous value, so we do not need to
//     //declare sum here... it will cause an error
//     return prev + cv.price;
//     // the zero below is like initializing the sum = 0
//   }, 0);
//   return sum / array.length;
// };
