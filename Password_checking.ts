function hasUpper(test:string):boolean{
    return test.split("").some(c=> c>"A" && c<"Z")

}
function hasLower(test:string):boolean{
    return test.split("").some(c=> c>"a" && c<"z")
}
function len(test:string){
    if(test.length >= 8){
        return true;
    }else{
        return false;
    }
}
function isNumber(test:string){
    return test.split("").some(c => c >= "0" && c<="9")
}
function Containspl(str:string):boolean{
    let reg = /[@,$,%,^,&,#]/
    if(reg.test(str)){
        return true
    }else{
        return false
    }
  
}
function password_check(password:string):string{
    if(hasUpper(password) && hasLower(password) && len(password) && isNumber(password) && Containspl(password)){
        return "Strong Password"
    }else{
        return "weak Password"
    }

}


console.log(password_check("Prasanna"))
console.log(password_check("Prasanna@123"))
console.log(password_check("Prasanna321"))

