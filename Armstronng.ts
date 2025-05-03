function Armstrong(numb:number){
    let Str_num = ""+numb;
    let power = Str_num.length
    let sum = 0;
    while(numb!=0){
        let digit = numb%10;
        sum =sum+Math.pow(digit, power);
        numb=Math.floor(numb/10)
    }
    if(Number(Str_num) == sum){
        console.log(`${Str_num} is an Armstrong number`)
    }else{
        console.log(`${Str_num} is not an Armstrong number`)
    }
} 

Armstrong(513)
Armstrong(34)
Armstrong(153)