class BankAccount {
  readonly accountNumber: string;

  #jsBalance: number;
  constructor(
    private balance: number,
    accountNumber: string,
    public readonly owner: string,
    jsBalance: number,
  ) {
    this.accountNumber = accountNumber;
    this.#jsBalance = jsBalance;
  }

  getBalance(): number {
    return this.balance;
  }

  protected transfer(amount: number) {
    try {
      if (amount > this.balance) {
        throw new Error("not sufficient balance");
      }

      this.balance = this.balance - amount;
    } catch (error) {
      console.log(error);
    }
  }
}

class SavingsAccount extends BankAccount {
  transferAmount(amount: number) {
    this.transfer(amount);
  }
}

const bank = new SavingsAccount(10000, "ACC01010101", "Anjal", 20000);

console.log(bank.getBalance());
bank.transferAmount(2000);
console.log(bank.getBalance());
bank.transferAmount(100);
console.log(bank.getBalance());
console.log(bank.owner);
