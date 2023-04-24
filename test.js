let a = {
    value: 0,
    valueOf: function () {
        return this.value++;
    },
    toString: function () {
        return this.value++;
    }
}
console.log(a == 1 && a == 2); // true

Object.defineProperties(a)