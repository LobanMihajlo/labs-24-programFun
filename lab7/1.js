const removeElement = (array, item) => {
    const index = array.indexOf(item);
    if (index !== -1) array.splice(index, 1);
    return array;
};

let array = [1, 2, 3, 4, 5, 6, 7];
console.log(removeElement(array, 9));
console.log(removeElement(array, 5));