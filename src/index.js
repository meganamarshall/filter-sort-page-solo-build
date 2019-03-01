import contacts from '../data/contacts.js';
import loadCards from './cards-component.js';
import loadFilter from './filter-compontent.js';

loadCards(contacts);

loadFilter(callback => {
    console.log('got a new filter', callback);
});
