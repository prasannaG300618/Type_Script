let Dublicate_array:number [] = [1,2,3,3,4,3,5,5,6,6,7,10]

let res = ""

let Unique:number[] = Dublicate_array.filter((val:number)=>{
    let element:string = ""+val
        let exist:number = res.search(element)
        if(exist<0){
            res=res+val
            return val
        }else{
            res=res+val
        }
    })
 

console.log(Unique)
    