class bankAcc {
    #balance = 0;
    constructor(name, phone) {
        (this.accName = name),
            (this.contact = phone),
            (this.accNumber = Math.floor(Math.random() * 100000));
        this.#balance = this.#balance;
    }

    deposit(amount) {
        this.#balance = this.#balance + amount;
        console.log(this.#balance)
    }

    withdraw(amount) {
        this.#balance = this.#balance - amount;
        console.log(this.#balance)
    }

    balanceInquiry() {
        console.log(this.#balance);
    }
}

const acc1 = new bankAcc("rohan", 9054906327);
acc1.deposit(5000)
// console.log(acc1.#balance);
acc1.withdraw(1000)
acc1.balanceInquiry()