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
    price: 5,
  },
];

export const calcAverageProductPrice = (array: Product[]): number => {
  let sum = 0;
  array.forEach((item) => {
    sum += item.price;
  });
  return sum / array.length;
};
calcAverageProductPrice(products);
