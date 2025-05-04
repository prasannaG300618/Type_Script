var direction;
(function (direction) {
    direction[direction["up"] = 0] = "up";
    direction[direction["down"] = 1] = "down";
    direction[direction["left"] = 2] = "left";
    direction[direction["right"] = 3] = "right";
})(direction || (direction = {}));
function findXandYaxis(test) {
    var x = 0, y = 0;
    test.forEach(function (e) {
        if (e == direction["up"] || e == direction[0]) {
            y++;
        }
        else if (e == direction["down"] || e == direction[1]) {
            y--;
        }
        else if (e == direction["right"] || e == direction[2]) {
            x++;
        }
        else if (e == direction["left"] || e == direction[3]) {
            x--;
        }
    });
    console.log("x axix in ".concat(x, ", y axix in ").concat(y, " "));
}
findXandYaxis([1, 2, 2, 3, 2]);
findXandYaxis(["right", "left", "up"]);
