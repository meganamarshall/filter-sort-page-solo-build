
export function makeContactCard(contact) {
    const html = /*html*/
    `<li>
            <h3>${contact.first_name} ${contact.last_name}</h3>
            <p>Email: ${contact.email}</p>
            <p>ID: ${contact.id}</p>
        </li>`;
    
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const contactList = document.getElementById('contact-list');

export default function loadCards(contacts) {
    while(contactList.firstChild) {
        contactList.firstChild.remove();
    }
    contacts.forEach(contact => {
        const dom = makeContactCard(contact);
        contactList.appendChild(dom);
    });
}