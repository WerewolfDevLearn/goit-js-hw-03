/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  balance: 0,
  transactions: [],
  createTransaction(amount, type) {
    const transaction = {
      type,
      amount,
    };
    return transaction;
  },
  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(amount, 'deposit');
    transaction.id = this.transactions.length;
    this.transactions.push(transaction);
  },
  withdraw(amount) {
    if (this.balance < amount) {
      console.log(
        'Недостаточно средст на счетую.',
        `На Вашем счету: ${this.balance} кредитов`,
      );
    } else {
      this.balance -= amount;
      const transaction = this.createTransaction(amount, 'withdraw');
      transaction.id = this.transactions.length;
      this.transactions.push(transaction);
    }
  },
  getBalance() {
    return this.balance;
  },
  getTransactionDetails(id) {
    for (let i = 0; i < this.transactions.length; i += 1) {
      const arrTofind = this.transactions[i];
      if (arrTofind.id === id) {
        return arrTofind;
      }
    }
    console.log('Нет такой транзакции');
  },
  getTransactionTotal(type) {
    let totalTransaction = 0;
    for (let i = 0; i < this.transactions.length; i += 1) {
      const objTofind = this.transactions[i];
      if (objTofind.type === type) {
        totalTransaction += objTofind.amount;
      }
    }
    return totalTransaction;
  },
};

console.log(account.deposit(110));
console.log(account.getBalance());
console.log(account.transactions);

console.log(account.deposit(120));
console.log(account.getBalance());
console.log(account.transactions);

console.log(account.withdraw(300));
console.log(account.getBalance());
console.log(account.transactions);

console.log(account.withdraw(30));
console.log(account.getBalance());
console.log(account.transactions);

console.log(account.getTransactionDetails(1));
console.log(account.getTransactionDetails(30));
console.log(account.getTransactionTotal('deposit'));
console.log(account.getTransactionTotal('withdraw'));
