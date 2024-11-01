const difference = (array1, array2) => {
let difference = [];
for (const item of array1) {
    if (!array2.includes(item)) difference.push(item);
}
return difference;
};

const array1 = ['Beijing', 'Kiev'];
const array2 = ['Kiev', 'London', 'Baghdad'];
console.log(difference(array2, array1));