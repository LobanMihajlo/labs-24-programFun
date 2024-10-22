const arr = [true, 'hello', 5, 12, -200, false, false, 'word', null, "12", 'true', NaN, undefined, Infinity, Math.PI, { wow: "shocking" }];

const typesCounter = (arr) => {
    const counters = {};
    for (el of arr) {
        const type = typeof el;
        counters[type] = (counters[type] || 0) + 1;
    }
    return counters;
}
console.log(typesCounter(arr));