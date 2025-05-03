let arr:number[] =[1,3,4,5,2,234,12];

function find(val:number, ar:number[]){
    let found:number = ar.findIndex((num:number) => num === val)
    return found
}

console.log(find(4,arr))
