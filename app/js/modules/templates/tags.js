import {getResouces} from '../getResources.js';
class Tags {
    constructor(colorTag, category, balance, parentSelector) {
        this.colorTag = colorTag;
        this.category = category;
        this.balance = balance;
        this.parent = document.querySelector(parentSelector);
    }

    // СОБИРАЕМ ВЁРСТКУ
    
    render() {
        const tag = document.createElement('li');
        tag.classList.add('fast__tag', 'btn', 'swiper-slide');
        tag.innerHTML = `
            <div class="fast__category text ${this.colorTag}">${this.category}</div>
            <div class="fast__balance textBold">$${this.balance}</div>
        `;

        this.parent.append(tag);
    }
}

// РЕНДЕРИМ КАРТОЧКИ

getResouces('http://localhost:3000/tags')
    .then(data => {
        data.forEach(({colorTag, category, balance, parentSelector}) => {
            new Tags(colorTag, category, balance, "ul.fast__tegs-items.swiper-wrapper").render()
        });
    });

// new Tags(
//     "azure",
//     "Training",
//     650,
//     "ul.fast__tegs-items.swiper-wrapper"
// ).render();

// new Tags(
//     "zinc",
//     "Internet",
//     45,
//     "ul.fast__tegs-items.swiper-wrapper"
// ).render();

// new Tags(
//     "spring",
//     "Gas",
//     135,
//     "ul.fast__tegs-items.swiper-wrapper"
// ).render();

// new Tags(
//     "mango",
//     "Cinema",
//     15,
//     "ul.fast__tegs-items.swiper-wrapper"
// ).render();

// new Tags(
//     "verdepom",
//     "Clothes",
//     700,
//     "ul.fast__tegs-items.swiper-wrapper"
// ).render();

// new Tags(
//     "white",
//     "Apple Store",
//     1000,
//     "ul.fast__tegs-items.swiper-wrapper"
// ).render();

// new Tags(
//     "amethyst",
//     "Coffee",
//     50,
//     "ul.fast__tegs-items.swiper-wrapper"
// ).render();

// new Tags(
//     "skies",
//     "Water",
//     45,
//     "ul.fast__tegs-items.swiper-wrapper"
// ).render();

// new Tags(
//     "magenta",
//     "Hair",
//     10,
//     "ul.fast__tegs-items.swiper-wrapper"
// ).render();

