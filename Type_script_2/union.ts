//find most occurance number

function occurance(arr:string[]|number[]){
    let count = 0;
    let val = arr[0];
     arr.forEach((e1)=>{
        let temp_count = 0;
       arr.forEach((e2)=>{
        if(e1 == e2){
            temp_count++;
        }
       })
    if(count <= temp_count){
        count = temp_count
        val = e1
    }
})
return val
}

function findMostOccurance(value:number[]|string):any{
    if(typeof value === "string"){
        let arr = value.split(",")
       return occurance (arr)

    }else if(typeof value === "object"){
       return occurance(value)
    }
}

console.log(findMostOccurance([1,1,1,2,3,4,5,5,4,3]))
console.log(findMostOccurance("1,2,3,4,5,5,4,3,5"))