import {getResouces} from '../getResources.js';
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
            <div class="overview__percent ${this.plusMinus}">  ${this.percent}%</div>
          </div>
          <div class="overview__last-month text">Compared to $${this.lastMonth} last month</div>
        `;

        this.parent.append(element);
    }
}

        // percents.forEach((e) =>{
        //     if(e.toString().startsWith("+")) {
        //         e.classList.toggle("plus")
        //     } else {
        //         e.classList.toggle("minus")
        //     }

        // });

// РЕНДЕРИМ КАРТОЧКИ

getResouces('http://localhost:3000/overview')
    .then(data => {
        data.forEach(({title, balance, percent, lastMonth, plusMinus, parentSelector}) => {
            new Overview(title, balance, percent, lastMonth, plusMinus, ".overview__transactions").render()
        });
    });