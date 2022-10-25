import InventoryItem from "./models/InventoryItem";

export const inventory: InventoryItem[] = [
  {
    product: {
      name: "coffee",
      price: 3,
    },
    quantity: 13,
  },
  {
    product: {
      name: "motor",
      price: 10.0,
    },
    quantity: 10,
  },
  {
    product: {
      name: "sensor",
      price: 12.5,
    },
    quantity: 4,
  },
  {
    product: {
      name: "Sp-404 mk2",
      price: 700,
    },
    quantity: 20,
  },
];

export const calcInventoryValue = (array: InventoryItem[]): number => {
  let sumOfAllProducts: number = 0;
  array.forEach((item) => {
    sumOfAllProducts += item.product.price * item.quantity;
  });
  return sumOfAllProducts;
};
