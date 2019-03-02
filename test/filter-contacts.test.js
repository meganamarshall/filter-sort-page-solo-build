import { filterContacts } from '../src/filter-component.js';
const test = QUnit.test;

QUnit.module('filtering logic');

test('filter by last name', assert => {
    //arrange
    const contacts = [
        { last_name: 'marshall' },
        { last_name: 'smith' },
        { last_name: 'honeyball' }
    ];
    const filter = { last_name: 'smith' };
    //act
    const filtered = filterContacts(contacts, filter);

    //assert
    assert.deepEqual(filtered, [{ last_name: 'smith' }]);
});

test('no filter returns all contacts', assert => {
    //arrange
    const contacts = [
        { last_name: 'marshall' },
        { last_name: 'smith' },
        { last_name: 'honeyball' }
    ];
    const filter = { last_name: '' };
    //act
    const filtered = filterContacts(contacts, filter);

    //assert
    assert.deepEqual(filtered, [{ last_name: 'marshall' },
        { last_name: 'smith' },
        { last_name: 'honeyball' }]);
});