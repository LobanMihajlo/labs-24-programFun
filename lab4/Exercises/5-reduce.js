'use strict';

const sum = (...args) => args.reduce((el1, el2) => el1 + el2, 0);

module.exports = { sum };
