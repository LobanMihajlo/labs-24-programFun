const unifyArray = (array) => {
let unifiedArray = [];
for (const item of array) {
    if (!unifiedArray.includes(item)) unifiedArray.push(item);
}
return unifiedArray;
};

let array = [1, 1, 2, 1, 3, 3, 3];
console.log(unifyArray(array));