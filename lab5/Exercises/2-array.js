'use strict';

const array = () => {
    const data = [];
    const getEl = (i) => data[i];
    getEl.push = (el) => data.push(el);
    getEl.pop = () => data.pop();
    return getEl;
};

module.exports = { array };
