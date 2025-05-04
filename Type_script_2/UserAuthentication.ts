interface user {
    userName:String,
    password:string | number,
    existing:boolean
}
interface newUser extends user{
    welcome():void
}
interface oldUser extends user{
    greet():void
}

let user1:user={
    userName:"Prasanna",
    password:123232,
    existing:true
} 
let user2:user={
    userName:"Mufeed",
    password:"Mufeed@123",
    existing:false
}
function home(userCredential:user):void{
    if(userCredential.existing){
        let newAccount:newUser = {
            userName:userCredential.userName,
            password:userCredential.password,
            existing:userCredential.existing,
           welcome: function(){
            console.log( `Welcome mr/ms ${newAccount.userName}, to our application`)
        } 
        };
        newAccount.welcome()
    }else{
        let oldAccount:oldUser = {userName:userCredential.userName,
            password:userCredential.password,
            existing:userCredential.existing,
            greet:function(){
            console.log(`Welcome back to our application, happy to see you again`)
        }
        }
        oldAccount.greet()
    }
}

home(user1)
home(user2)