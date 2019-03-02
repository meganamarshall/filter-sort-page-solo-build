const test = QUnit.test;

QUnit.module('sorting');

const contacts = [
    { first_name: 'megan', last_name: 'marshall', id: '1' },
    { first_name: 'patrick', last_name: 'posner', id: '4' },
    { first_name: 'erin', last_name: 'marshall', id: '3' }
];

function sortByName
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