var pattern = "";
for (var i = 0; i < 10; i++) {
    for (var j = 0; j <= i; j++) {
        pattern = pattern + " * ";
    }
    pattern = pattern + "\n";
}
console.log(pattern);
