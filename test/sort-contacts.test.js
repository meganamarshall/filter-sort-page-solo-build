const test = QUnit.test;

QUnit.module('sorting');

const contacts = [
    { first_name: 'megan', last_name: 'marshall', id: '1' },
    { first_name: 'patrick', last_name: 'posner', id: '4' },
    { first_name: 'erin', last_name: 'marshall', id: '3' }
];

function sortByName(contacts) {
    return contacts.sort((a, b) => {
        if(a.first_name === b.first_name) {
            return 0;
        }
        if(a.first_name > b.first_name) {
            return 1;
        }
        return -1;
    });
}

function sortByNumber(contacts) {
    return contacts.sort((a, b) => {
        if(a.id === b.id) {
            return 0;
        }
        if(a.id > b.id) {
            return 1;
        }
        return -1;
    });
}
test('sort by first name', assert => {
    //arrange
    const expected = [
        { first_name: 'erin', last_name: 'marshall', id: '3' },
        { first_name: 'megan', last_name: 'marshall', id: '1' },
        { first_name: 'patrick', last_name: 'posner', id: '4' }
    ];
    //act
    const sorted = sortByName(contacts);
    //assert
    assert.deepEqual(sorted, expected);
});

test('sort by id number', assert => {
    //arrange
    const expected = [
        { first_name: 'megan', last_name: 'marshall', id: '1' },
        { first_name: 'erin', last_name: 'marshall', id: '3' },
        { first_name: 'patrick', last_name: 'posner', id: '4' }
    ];
    //act
    const sorted = sortByNumber(contacts);
    //assert
    assert.deepEqual(sorted, expected);
});