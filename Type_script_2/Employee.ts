interface Employee {
    name:string,
    id:number,
    salary:number,
}

let Employee:Employee[] =[
    {name:"Prasanna", id : 7,salary:35000},
    {name:"Swethitha", id : 2,salary:25000},
    {name:"Mufeed", id : 3,salary:45000},
    {name:"John", id : 4,salary:55000},
    {name:"Gobal", id : 5,salary:15000},
    {name:"Gokul", id : 6,salary:25000},
    {name:"Kalai", id : 11,salary:25000},
    {name:"Jeeva", id : 12,salary:35000},
    {name:"Prasanth", id : 10,salary:35000},
]

function getEmployeeBasedOnSalary(salary:number){
        let new_arr = Employee.filter((e):any=>{
            if(e.salary === salary){
                return e
            }
        })
        return new_arr
}

function getSalaryMorethan(salary:number){
 let new_arr = Employee.filter((e):any=>{
            if(e.salary > salary){
                return e
            }
        })
        return new_arr    
}

function search(value:string|number){
    let new_arr = Employee.filter((e):any=>{
        if(value == e.id || value == e.name || value == e.salary){
            return e
        }
    })
    return new_arr
}
console.log("Employee get salary 35000")
console.log(getEmployeeBasedOnSalary(35000))
console.log("Employee get salary  more than 15000")
console.log(getSalaryMorethan(15000))
console.log("Emlployee search by name ")
console.log(search("Prasanna"))
