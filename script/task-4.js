const countTotalSalary = function(employees) {
  const arrOfSalary = Object.values(employees);
  console.log(arrOfSalary);
  let totalSalary = 0;
  if (arrOfSalary.length === 0) {
    return totalSalary;
  }
  for (let i = 0; i < arrOfSalary.length; i += 1) {
    totalSalary += arrOfSalary[i];
  }

  return totalSalary;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400
