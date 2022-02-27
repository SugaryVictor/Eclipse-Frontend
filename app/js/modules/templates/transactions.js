import {getResouces} from '../getResources.js';
import {lastTransaction} from '../swipers.js';
class LastTransactions {
    constructor(src, alt, store, date, cardsPay, cardsPayAlt, cardNumber, cardType, balance, plusMinus, parentSelector) {
        this.src = src;
        this.alt = alt;
        this.store = store;
        this.date = date;
        this.cardsPay = cardsPay;
        this.cardsPayAlt = cardsPayAlt;
        this.cardNumber = cardNumber;
        this.cardType = cardType;
        this.balance = balance;
        this.plusMinus = plusMinus;
        // this.color = color;
        this.parent = document.querySelector(parentSelector);
    }

    // СОБИРАЕМ ВЁРСТКУ

    render() {
        const element = document.createElement('li');
        element.classList.add("last-transaction__stroke", "swiper-slide");
        element.innerHTML = `
            <div class="last-transaction__category"><img class="last-transaction__img" src=${this.src} alt=${this.alt}/>
              <div class="last-transaction__info">
                <div class="last-transaction__store miniButtonLabel">${this.store}</div>
                <div class="last-transaction__date description">${this.date}</div>
              </div>
            </div>
            <div class="last-transaction__cards-pay">
                <img class="last-transaction__img" src=${this.cardsPay} alt=${this.cardsPayAlt}/>
              <div class="last-transaction__cards-info">
                <div class="last-transaction__number description">${this.cardNumber}</div>
                <div class="last-transaction__card-type description">${this.cardType}</div>
              </div>
            </div>
            <div class="last-transaction__transactions-balance h7">${this.plusMinus}$${this.balance}</div>
            `;

        this.parent.append(element);
    }
}

// РЕНДЕРИМ КАРТОЧКИ

getResouces('http://localhost:3000/last-transactions')
    .then(data => {
        data.forEach(({src, alt, store, date, cardsPay, cardsPayAlt, cardNumber, cardType, balance, plusMinus, parentSelector}) => {
            new LastTransactions(src, alt, store, date, cardsPay, cardsPayAlt, cardNumber, cardType, balance, plusMinus, parentSelector).render()
        });
        setTimeout(() => {
            lastTransaction.init();
        },0);
    });

new LastTransactions(
    "./img/categories-icons/gamepad.svg",
    "gamepad",
    "Apple store",
    "05.01.2020",
    "./img/cards/visa-card-red.svg",
    "card",
    "*4300",
    "Credit card",
    135,
    "- ",
    ".last-transaction__table"
).render();

// new LastTransactions(
//     "./img/categories-icons/сoffee.svg",
//     "coffee",
//     "Starbucks Cafe",
//     "04.01.2020",
//     "./img/cards/visa-card-blue.svg",
//     "card",
//     "*6589",
//     "Credit card",
//     16.50,
//     "- ",
//     ".last-transaction__table"
// ).render();

// new LastTransactions(
//     "./img/categories-icons/pharmacy.svg",
//     "pharmacy",
//     "Pharmacy",
//     "04.01.2020",
//     "./img/cards/mastercard-card.svg",
//     "card",
//     "*9054",
//     "Credit card",
//     58.00,
//     "- ",
//     ".last-transaction__table"
// ).render();

// new LastTransactions(
//     "./img/categories-icons/food.svg",
//     "food",
//     "Spar",
//     "03.01.2020",
//     "./img/cards/visa-card-red.svg",
//     "card",
//     "*3288",
//     "Credit card",
//     18.00,
//     "- ",
//     ".last-transaction__table"
// ).render();

// new LastTransactions(
//     "./img/categories-icons/pharmacy.svg",
//     "pharmacy",
//     "Pharmacy",
//     "05.01.2020",
//     "./img/cards/mastercard-card.svg",
//     "card",
//     "*3288",
//     "Credit card",
//     35,
//     "- ",
//     ".last-transaction__table"
// ).render();

// new LastTransactions(
//     "./img/categories-icons/pharmacy.svg",
//     "pharmacy",
//     "Pharmacy",
//     "05.01.2020",
//     "./img/cards/mastercard-card.svg",
//     "card",
//     "*3288",
//     "Credit card",
//     35,
//     "- ",
//     ".last-transaction__table"
// ).render();

// new LastTransactions(
//     "./img/categories-icons/сoffee.svg",
//     "coffee",
//     "Starbucks Cafe",
//     "04.01.2020",
//     "./img/cards/visa-card-blue.svg",
//     "card",
//     "*6589",
//     "Credit card",
//     16.50,
//     "- ",
//     ".last-transaction__table"
// ).render();


// new LastTransactions(
//     "./img/categories-icons/pharmacy.svg",
//     "pharmacy",
//     "Pharmacy",
//     "05.01.2020",
//     "./img/cards/mastercard-card.svg",
//     "card",
//     "*3288",
//     "Credit card",
//     35,
//     "- ",
//     ".last-transaction__table"
// ).render();
