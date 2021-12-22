function getAccount(account) {
  return {
    accountId: account.id,
    owner: `${account.name} ${account.lastName}`,
    balance: 0,
    deposit: function (amount) {
      this.balance += amount;
    },
  };
}

function BankAccount(id, name, lastName) {
  this.id = id;
  this.owner = `${name} ${lastName}`;
  this.balance = 0;
  this.showBalance = function () {
    return this.balance;
  };
}

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

BankAccount.prototype.withdrawal = function (amount) {
  this.balance -= amount;
};

const accountCB = getAccount({ id: 1234, name: "gal", lastName: "amouyal" });
const accountFCN = new BankAccount(1234, "gal", "amouyal");

const yAccount = new BankAccount(1234, "gal", "amouyal");
const copyYAccount = { ...yAccount };
copyYAccount.__proto__ = yAccount.__proto__;
Object.setPrototypeOf(copy2, BankAccount.prototype); // equal to line 34


// Object.keys
// Object.values
// Object.entries 
