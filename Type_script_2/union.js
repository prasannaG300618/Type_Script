//find most occurance number
function occurance(arr) {
    var count = 0;
    var val = arr[0];
    arr.forEach(function (e1) {
        var temp_count = 0;
        arr.forEach(function (e2) {
            if (e1 == e2) {
                temp_count++;
            }
        });
        if (count <= temp_count) {
            count = temp_count;
            val = e1;
        }
    });
    return val;
}
function findMostOccurance(value) {
    if (typeof value === "string") {
        var arr = value.split(",");
        return occurance(arr);
    }
    else if (typeof value === "object") {
        return occurance(value);
    }
}
console.log(findMostOccurance([1, 1, 1, 2, 3, 4, 5, 5, 4, 3]));
console.log(findMostOccurance("1,2,3,4,5,5,4,3,5"));
