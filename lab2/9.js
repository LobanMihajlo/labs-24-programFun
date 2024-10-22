'use strict';

const phones = [
    { name: 'Jack Maximus', phone: '+380998887766' },
    { name: 'Max Jackson', phone: '+380997775533' }
];

const findPhone = (name) => {
    for (const obj of phones) {
        if (obj.name === name) return obj.phone;
    }
}

console.log(findPhone('Max Jackson'));