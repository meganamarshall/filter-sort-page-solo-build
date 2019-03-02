import contacts from '../data/contacts.js';
import loadCards from './cards-component.js';
import loadFilter from './filter-component.js';
import { filterContacts } from './filter-component.js';

loadCards(contacts);

loadFilter(filter => {
    const filtered = filterContacts(contacts, filter);
    loadCards(filtered);
});

