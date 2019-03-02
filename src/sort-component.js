const sortSelect = document.getElementById('sort-select');

export function sortContacts(contacts, sortChoice) {
    const property = sortChoice.property;
    return contacts.sort((a, b) => {
        if(a[property] === b[property]) {
            return 0;
        }
        if(a[property] > b[property]) {
            return 1;
        }
        return -1;
    });
}

export default function loadSort(callback) {
    sortSelect.addEventListener('change', () => {
        const sortChoice = {
            property: sortSelect.value
        };
        callback(sortChoice);
    });
}