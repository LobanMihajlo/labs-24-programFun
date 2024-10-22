'use strict';

const iface = {
    m1: (x) => [x],
    m2: function (x, y) {
        return [x, y];
    },
    m3(x, y, z) {
        return [x, y, z];
    }
};

const introspect = (iface) => {
    const res = [];
    for (const key in iface) {
        const item = iface[key];
        console.log(item.length);
        if (typeof item === 'function') res.push([key, item.length]);
    }
    return res;
}

console.log(introspect(iface));
console.log(introspect.length);