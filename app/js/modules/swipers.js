const sliderTopCategories = document.querySelector('.top-categories');
const sliderLastTransaction = document.querySelector('.last-transaction');
const sliderCards = document.querySelector('.card');
const sliderFast = document.querySelector('.fast__tegs-wrapper');

// SLIDER FOR TOP_CATEGORIES
const topCategories = new Swiper(sliderTopCategories, {  
	slidesPerView: 3,
	spaceBetween: 9,
	loop: false,
    slidesPerGroup: 3,

//   Navigation arrows
    navigation: {
    nextEl: '.top-categories__btn.btn-next',
    prevEl: '.top-categories__btn.btn-prev',
    },
});

// SLIDER FOR LAST TRANSACTION
const lastTransaction = new Swiper(sliderLastTransaction, {  
    direction: "vertical",
    slidesPerView: 4,

//   Navigation arrows
    navigation: {
    nextEl: '.last-transaction__btn.btn-next',
    prevEl: '.last-transaction__btn.btn-prev',
    },
});

// SLIDER FOR LAST TRANSACTION
const cards = new Swiper(sliderCards, {  
	slidesPerView: 3,
	spaceBetween: 25,
	loop: false,
});

// SLIDER FOR FAST PEYMENT
const fast = new Swiper(sliderFast, {
    slidesPerView: 'auto',
    slidesPerGroup: 2,
	spaceBetween: 10,
});