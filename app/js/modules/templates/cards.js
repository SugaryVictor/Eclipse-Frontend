import {getResouces} from '../getResources.js';
class MenuCard {
    constructor(colorClass, src, alt, balance, cardHolder, finLogo, finLogoAlt, parentSelector) {
        this.src = src;
        this.alt = alt;
        this.finLogo = finLogo;
        this.finLogoAlt = finLogoAlt;

        this.balance = balance;
        this.cardHolder = cardHolder;
        this.colorClass = colorClass;
        this.parent = document.querySelector(parentSelector);
    }

    // СОБИРАЕМ ВЁРСТКУ
    
    render() {
        const element = document.createElement('div');
        element.classList.add('card__body','swiper-slide', this.colorClass);
        element.innerHTML = `
              <div class="card__currency"> 
                <img src=${this.src} alt=${this.alt}/>
                <img src="./img/icons/chip.svg" alt="CHIP"/></div>
              <div class="card__balance h2">${this.balance}</div>
              <div class="card__info">
                <div class="card__card-holder">Card holder<span>${this.cardHolder}</span></div>
                <div class="card__fin-logo">
                    <img src=${this.finLogo} alt=${this.finLogoAlt}/></div>
              </div>
            </div>
        `;
        this.parent.append(element);
    }
}

// РЕНДЕРИМ КАРТОЧКИ

getResouces('http://localhost:3000/cards')
    .then(data => {
        data.forEach(({colorClass, src, alt, balance, cardHolder, finLogo, finLogoAlt, parentSelector}) => {
            new MenuCard(colorClass, src, alt, balance, cardHolder, finLogo, finLogoAlt, parentSelector).render()
        });
    });