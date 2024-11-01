const contract = (fn, ...types) => (...args) => {
    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        const type = types[i];
        const name = type.name.toLowerCase();
        if (typeof arg !== name) throw new TypeError(`Error: ${name} is an inappropriate type of arguments`);
    }

    const res = fn(...args);
    const resType = types[types.length - 1];
    const name = resType.name.toLowerCase();
    if (typeof res !== name) throw new TypeError(`Error: ${name} is an inappropriate type of result`);
    return res;
}

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res = concatStrings('Hello ', 'world!');
console.dir(res);