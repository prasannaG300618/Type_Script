enum direction  {
    up,
    down,
    left,
    right
}


function findXandYaxis(test:string[]|number[]):void{
    let x:number=0 ,y:number = 0;
    test.forEach(e=>{
        if(e == direction["up"] || e == direction[0]){
            y++
        }else if(e == direction["down"] || e == direction[1]){
            y--
        }else if(e == direction["right"]|| e == direction[2]){
            x++
        }else if(e == direction["left"] || e == direction[3]){
            x--
        }
    })
    console.log(`x axix in ${x}, y axix in ${y} `)
}

findXandYaxis([1,2,2,3,2])
findXandYaxis(["right","left","up"])
