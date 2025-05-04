import { CONNREFUSED } from "dns"

type test = {
    test1 : number|string,
    test2 : number|string,
    test3 : number|string,
}

let test_values ={
    test1:2324,
    test2:"Prasanna",
    test3:"Hello"
} satisfies test

    function reverse_string(value:string){
        let new_str = ""
        for(let i = value.length-1; i >= 0;i--){
            new_str = new_str+value.charAt(i)
        }
        return new_str
    }

 function reverse_number(num:number){
    let str = ""+num;
    return reverse_string(str)
 }

 console.log(reverse_number(test_values["test1"]))
 console.log(reverse_string(test_values["test2"]))
 console.log(reverse_string(test_values["test3"]))