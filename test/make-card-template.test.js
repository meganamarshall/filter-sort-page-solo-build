const test = QUnit.test;

QUnit.module('template build');

test('make contact card template', assert => {
    //arrange
    const contact = {
        'id':1, 'first_name':'Rakel', 'last_name':'Stouther', 'email':'rstouther0@google.de', 'ip_address':'80.101.98.235'
    };
    const expected = /*html*/
    `<li>
            <h3>Rakel Stouther</h3>
            <p>Email: rstouther0@google.de</p>
            <p>ID: 1</p>
        </li>`;
    //act
    const dom = makeContactCard(contact)
    //assert

    assert.deepEqual(dom, expected);
});