"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var test_values = {
    test1: 2324,
    test2: "Prasanna",
    test3: "Hello"
};
function reverse_string(value) {
    var new_str = "";
    for (var i = value.length - 1; i >= 0; i--) {
        new_str = new_str + value.charAt(i);
    }
    return new_str;
}
function reverse_number(num) {
    var str = "" + num;
    return reverse_string(str);
}
console.log(reverse_number(test_values["test1"]));
console.log(reverse_string(test_values["test2"]));
