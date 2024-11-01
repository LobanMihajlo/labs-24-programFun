const removeElements = (array, ...items) => {
for (const item of items) {
    const index = array.indexOf(item);
    if (index !== -1) array.splice(index, 1);
}
return array;
};

let array = [1, 2, 3, 4, 5, 6, 7];
console.log(removeElements(array, 9, 1, 2));