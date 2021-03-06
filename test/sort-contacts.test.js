import { sortContacts } from '../src/sort-component.js';
const test = QUnit.test;

QUnit.module('sorting');

const contacts = [
    { first_name: 'megan', last_name: 'marshall', id: '1' },
    { first_name: 'patrick', last_name: 'posner', id: '4' },
    { first_name: 'erin', last_name: 'marshall', id: '3' }
];

test('sort by first name', assert => {
    //arrange
    const sortChoice = { property: 'first_name' };
    const expected = [
        { first_name: 'erin', last_name: 'marshall', id: '3' },
        { first_name: 'megan', last_name: 'marshall', id: '1' },
        { first_name: 'patrick', last_name: 'posner', id: '4' }
    ];
    //act
    const sorted = sortContacts(contacts, sortChoice);
    //assert
    assert.deepEqual(sorted, expected);
});

test('sort by id number', assert => {
    //arrange
    const sortChoice = { property: 'id' };
    const expected = [
        { first_name: 'megan', last_name: 'marshall', id: '1' },
        { first_name: 'erin', last_name: 'marshall', id: '3' },
        { first_name: 'patrick', last_name: 'posner', id: '4' }
    ];
    //act
    const sorted = sortContacts(contacts, sortChoice);
    //assert
    assert.deepEqual(sorted, expected);
});