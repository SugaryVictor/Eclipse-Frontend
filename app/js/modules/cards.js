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
                <img src="../img/icons/chip.svg" alt="CHIP"/></div>
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

new MenuCard(
    "orange",
    "../img/logos/btc-logo.svg",
    "BTC",
    "12,500",
    "Orion",
    "../img/logos/visa-logo.svg",
    "visa",
    '.swiper-wrapper'
).render();

new MenuCard(
    "gray",
    "../img/logos/euro-logo.svg",
    "EURO",
    "54,302",
    "Alien Pixels",
    "../img/logos/mastercard-logo.svg",
    "mastercard",
    '.swiper-wrapper'
).render();
    
new MenuCard(
    "red",
    "../img/logos/usd-logo.svg",
    "USD",
    "38,864",
    "ALEX",
    "../img/logos/visa-logo.svg",
    "visa",
    '.swiper-wrapper'
).render();

new MenuCard(
    "manteray",
    "../img/logos/usd-logo.svg",
    "USD",
    "12,500",
    "Sugary",
    "../img/logos/mastercard-logo.svg",
    "mastercard",
    '.swiper-wrapper'
).render();

new MenuCard(
    "red",
    "../img/logos/usd-logo.svg",
    "USD",
    "44,246",
    "ALEX",
    "../img/logos/visa-logo.svg",
    "visa",
    '.swiper-wrapper'
).render();

new MenuCard(
    "bigSur",
    "../img/logos/usd-logo.svg",
    "USD",
    "54,302",
    "Victor Chepkasov",
    "../img/logos/visa-logo.svg",
    "visa",
    '.swiper-wrapper'
).render();