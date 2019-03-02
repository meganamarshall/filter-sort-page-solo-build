const filterForm = document.getElementById('filter');

export function filterContacts(contacts, filter) {
    return contacts.filter(contact => {
        const nameMatches = !filter.last_name || contact.last_name === filter.last_name;
        return nameMatches;
    });
}

export default function loadFilter(callback) {
    filterForm.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(filterForm);
        const filter = {
            last_name: formData.get('last_name')
        };
        callback(filter);
    });
}