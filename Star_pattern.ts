//"Star pattern"

let pattern:String = ""

for(let i = 0;i<10;i++){
    for(let j = 0;j<=i;j++){
        pattern = pattern+" * "
    }
    pattern = pattern+"\n"
}

console.log(pattern)