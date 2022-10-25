import Inventory from "./models/Inventory";

export const inventory: Inventory[] = [
  {
    name: "motor",
    price: 10.0,
    quantity: 10,
  },
  {
    name: "sensor",
    price: 12.5,
    quantity: 4,
  },
  {
    name: "LED",
    price: 1.0,
    quantity: 20,
  },
];

export const calcInventoryValue =()