var arr = [1, 3, 4, 5, 2, 234, 12];
function find(val, ar) {
    var found = ar.findIndex(function (num) { return num === val; });
    return found;
}
console.log(find(4, arr));
