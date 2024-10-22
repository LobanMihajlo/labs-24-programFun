'use strict';

const phones = {
    Michael: '+380998887766',
    Jackson: '+380997775533'
};

const findPhone = (name) => phones[name];

console.log(findPhone('Michael'));