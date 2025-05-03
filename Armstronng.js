function Armstrong(numb) {
    var Str_num = "" + numb;
    var power = Str_num.length;
    var sum = 0;
    while (numb != 0) {
        var digit = numb % 10;
        sum = sum + Math.pow(digit, power);
        numb = Math.floor(numb / 10);
    }
    if (Number(Str_num) == sum) {
        console.log("".concat(Str_num, " is an Armstrong number"));
    }
    else {
        console.log("".concat(Str_num, " is not an Armstrong number"));
    }
}
Armstrong(513);
Armstrong(34);
Armstrong(153);
