const checkForSpam = function(message) {
  let spamSale;
  message = message.toLowerCase();
  message.includes('spam');
  if (message.includes('spam') || message.includes('sale')) {
    spamSale = 'true';
  } else {
    spamSale = 'false';
  }
  return spamSale;
};
// Вызовы функции для проверки работоспособности твоей реализации.

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
