var user1 = {
    userName: "Prasanna",
    password: 123232,
    existing: true
};
var user2 = {
    userName: "Mufeed",
    password: "Mufeed@123",
    existing: false
};
function home(userCredential) {
    if (userCredential.existing) {
        var newAccount_1 = {
            userName: userCredential.userName,
            password: userCredential.password,
            existing: userCredential.existing,
            welcome: function () {
                console.log("Welcome mr/ms ".concat(newAccount_1.userName, ", to our application"));
            }
        };
        newAccount_1.welcome();
    }
    else {
        var oldAccount = { userName: userCredential.userName,
            password: userCredential.password,
            existing: userCredential.existing,
            greet: function () {
                console.log("Welcome back to our application, happy to see you again");
            }
        };
        oldAccount.greet();
    }
}
home(user1);
home(user2);
