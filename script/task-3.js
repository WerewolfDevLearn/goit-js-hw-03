const findBestEmployee = function(employees) {
  const arrOfEmployees = Object.entries(employees);
  let j;
  let totalWorks = 0;
  for (let i = 0; i < arrOfEmployees.length; i += 1) {
    const bestEmployee = arrOfEmployees[i];
    if (totalWorks < bestEmployee[1]) {
      j = i;
      totalWorks = bestEmployee[1];
    }
  }
  return arrOfEmployees[j];
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
);
//lorence;

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); //lux;
