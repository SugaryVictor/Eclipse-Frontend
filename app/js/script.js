import * as swiper from './modules/swipers.js';
import * as popUp from './modules/popUp.js';
import * as menuCards from './modules/cards.js';
import * as tags from './modules/tags.js';
import * as lastTransactions from './modules/transactions.js';
import * as overview from './modules/overview.js';
window.addEventListener('DOMContentLoaded', function() {
    swiper();
    popUp();
    menuCards();
    tags();
    lastTransactions();
    overview();
});