'use strict';

const range = (start, end) => {
    let array = [];
    for (let j = start; j <= end; j++) {
        if (j % 2 !== 0) array.push(j);
    }
    return array;
}

console.log(range(15, 30));