function hasUpper(test) {
    return test.split("").some(function (c) { return c > "A" && c < "Z"; });
}
function hasLower(test) {
    return test.split("").some(function (c) { return c > "a" && c < "z"; });
}
function len(test) {
    if (test.length >= 8) {
        return true;
    }
    else {
        return false;
    }
}
function isNumber(test) {
    return test.split("").some(function (c) { return c >= "0" && c <= "9"; });
}
function Containspl(str) {
    var reg = /[@,$,%,^,&,#]/;
    if (reg.test(str)) {
        return true;
    }
    else {
        return false;
    }
}
function password_check(password) {
    if (hasUpper(password) && hasLower(password) && len(password) && isNumber(password) && Containspl(password)) {
        return "Strong Password";
    }
    else {
        return "weak Password";
    }
}
console.log(password_check("Prasanna"));
console.log(password_check("Prasanna@123"));
console.log(password_check("Prasanna321"));
