import contacts from '../data/contacts.js';
import loadCards from './cards-component.js';
import loadFilter from './filter-component.js';
import { filterContacts } from './filter-component.js';
import loadSort from './sort-component.js';
import { sortContacts } from './sort-component.js';
const json = localStorage.getItem('filtered');

loadCards(contacts);

loadFilter(filter => {
    const filtered = filterContacts(contacts, filter);
    loadCards(filtered);
    const json = JSON.stringify(filtered);
    localStorage.setItem(json, 'filtered');
    console.log(filtered);
});

loadSort(sortChoice => {
    const json = localStorage.getItem('filtered');
    if(json) {
        const filtered = JSON.parse(json);
        const filteredSort = sortContacts(filtered, sortChoice);
        loadCards(filteredSort);
    }
    else {
        const sortedContacts = sortContacts(contacts, sortChoice);
        loadCards(sortedContacts);
    }
});

