const cart = [
  { name: "Shirt", price: 500 },
  { name: "Shoes", price: 1500 },
  { name: "Bag", price: 1000 },
  { name: "Watch", price: 2000 }
];

const sortedCart = cart.sort((a, b) => a.price - b.price);

console.log(sortedCart);

const total = sortedCart.reduce((acc, item) => {
  return acc + item.price;
}, 0);

console.log(total);