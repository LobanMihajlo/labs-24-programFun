'use strict';

const fn = () => {
    const object1 = { name: 'Max' };
    let object2 = { name: 'Max' };

    object1.name = 'Alex';
    object2.name = 'Alex';

    //object1 = { name: 'Maximus' }; //doesn't work because we can't change a constant in js
    object2 = { name: 'Maximus' };

    console.log(object1);
    console.log(object2);
}

fn();