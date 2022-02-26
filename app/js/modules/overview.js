class Overview {
    constructor(title, balance, percent, lastMonth, plusMinus, parentSelector) {
        this.title = title;
        this.balance = balance;
        this.percent = percent;
        this.plusMinus = plusMinus;
        this.lastMonth = lastMonth;

        this.parent = document.querySelector(parentSelector);
    }

    // СОБИРАЕМ ВЁРСТКУ
    render() {
        const element = document.createElement('div');
        element.classList.add('overview__transactions-item');
        element.innerHTML = `
          <div class="overview__title buttonText">${this.title}</div>
          <div class="overview__balance-info"> 
            <div class="overview__balance h3">$${this.balance}</div>
            <div class="overview__percent ${this.plusMinus}"> ${this.percent}%</div>
          </div>
          <div class="overview__last-month text">Compared to $${this.lastMonth} last month</div>
        `;

        this.parent.append(element);
    }
}

new Overview(
    "Income",
    32.134,
    2.5,
    21.340,
    "plus",
    ".overview__transactions"
).render();

new Overview(
    "Expense",
    4.541,
    2.5,
    21.000,
    "minus",
    ".overview__transactions"
).render();

new Overview(
    "Cashback",
    1.324,
    4.5,
    21.000,
    "plus",
    ".overview__transactions"
).render();

new Overview(
    "Monthly turnover",
    87.324,
    31,
    196.129,
    "minus",
    ".overview__transactions"
).render();