function sum_of_digit(num) {
    var Total = 0;
    while (num != 0) {
        Total = Total + num % 10;
        num = Math.floor(num / 10);
    }
    return Total;
}
console.log(sum_of_digit(304));
console.log(sum_of_digit(100));
console.log(sum_of_digit(453));
