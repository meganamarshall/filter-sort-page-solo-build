const test = QUnit.test;

QUnit.module('filtering logic');

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