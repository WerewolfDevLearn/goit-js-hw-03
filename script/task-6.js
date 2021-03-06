const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function(allProdcuts, productName) {
  for (let i = 0; i < allProdcuts.length; i += 1) {
    const product = allProdcuts[i];
    if (productName === product.name) {
      const totalPrice = product.price * product.quantity;
      return totalPrice;
    }
  }
  const massage = `У нас нет товара с таким именем ${productName}`;
  return massage;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800
