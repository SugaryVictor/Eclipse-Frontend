// SLIDER FOR LAST TRANSACTION
export const lastTransaction = new Swiper('.last-transaction', {  
    slidesPerView: 4,
    slidesPerGroup: 2,
    direction: "vertical",

//  Navigation arrows
    navigation: {
        nextEl: '.last-transaction__btn.btn-next',
        prevEl: '.last-transaction__btn.btn-prev',
    },
    init:false,
});

// SLIDER FOR TOP_CATEGORIES
const topCategories = new Swiper('.top-categories', {  
	slidesPerView: 3,
	spaceBetween: 9,
	loop: false,
    slidesPerGroup: 3,

//  Navigation arrows
    navigation: {
        nextEl: '.top-categories__btn.btn-next',
        prevEl: '.top-categories__btn.btn-prev',
    },
});



// SLIDER FOR CARDS
const cards = new Swiper('.card', {  
	slidesPerView: 3,
	spaceBetween: 25,
	loop: false,
});

// SLIDER FOR FAST PEYMENT
const fast = new Swiper('.fast__tegs-wrapper', {
    slidesPerView: 'auto',
    slidesPerGroup: 2,
	spaceBetween: 10,
});