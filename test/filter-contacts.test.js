const test = QUnit.test;

QUnit.module('filtering logic');

function filterContacts(contacts, filter) {
    return contacts.filter(contact => {
        const nameMatches = !filter.name || contact.name === filter.name;
        return nameMatches;
    });
}
test('filter by last name', assert => {
    //arrange
    const contacts = [
        { name: 'marshall' },
        { name: 'smith' },
        { name: 'honeyball' }
    ];
    const filter = { name: 'smith' };
    //act
    const filtered = filterContacts(contacts, filter);

    //assert
    assert.deepEqual(filtered, [{ name: 'smith' }]);
});

test('no filter returns all contacts', assert => {
    //arrange
    const contacts = [
        { name: 'marshall' },
        { name: 'smith' },
        { name: 'honeyball' }
    ];
    const filter = { name: '' };
    //act
    const filtered = filterContacts(contacts, filter);

    //assert
    assert.deepEqual(filtered, [{ name: 'marshall' },
        { name: 'smith' },
        { name: 'honeyball' }]);
});