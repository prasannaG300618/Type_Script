var Dublicate_array = [1, 2, 3, 3, 4, 3, 5, 5, 6, 6, 7, 10];
var res = "";
var Unique = Dublicate_array.filter(function (val) {
    var element = "" + val;
    var exist = res.search(element);
    if (exist < 0) {
        res = res + val;
        return val;
    }
    else {
        res = res + val;
    }
});
console.log(Unique);
