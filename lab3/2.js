'use strict';

const generateKey = (len, arrayOfChar) => {
    const base = arrayOfChar.length;
    let key = '';
    for (let i = 0; i < len; i++) {
        const index = Math.floor(Math.random() * base);
        key += arrayOfChar[index];
    }
    return key;
};

console.log(generateKey(15, ['a', 'b', 'c', 'd', 1, 2, 3, 4]));
