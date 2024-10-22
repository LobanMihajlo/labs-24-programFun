const obj = {
    n: 14
}
const inc = (object) => {
    if(typeof object === "object") return ++object.n;
    throw new Error("the parameter must be an object")
}
console.log(inc(obj));
console.log(inc("inc(obj)"));