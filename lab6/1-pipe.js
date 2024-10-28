'use strict';

const pipe = (...fns) => {
    for (const fn of fns) {
        if (typeof fn !== 'function') throw new Error('all arguments should be functions')
    }
    return (x) => fns.reduce((curVal, fn) => fn(curVal), x);
};

