'use strict';

const average = (num1, num2) => (num1 + num2) / 2;

const square = (num) => num * num;

const cube = (num) => num ** 3;

const calculate = () => {
    let array = [];
    
    for (let i = 0; i <= 9; i++) {
        array.push(average(square(i), cube(i)));
    }

    return array;
}

console.log(calculate());
