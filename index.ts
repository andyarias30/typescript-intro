let x = 'hey class' // implicitly it always hace string 
let a:string = 'Im a string'
let b:string | number | boolean = 'another string '
console.log(typeof x)

console.log(typeof(x))

b = 12345
console.log(typeof(x))

b = false
console.log(typeof(x))


function testMyTypescript(num1:number , num2:number): number{
    return num1 * num2
}
console.log(testMyTypescript(23 , 34))

// Arrays in typescript

function myArrayFunction(arr1: string[]){
console.log(arr1)
}

myArrayFunction(['test1', 'hola', 'mira' ,'vea'])

/**
 * Objects
 * there are two ways to decalre the shape of an object
 * 1. Type
 * 2. Interface - more flexible
 */
type TBird = {
    wings: number
    beak: boolean
    feathers: number | string // pip means that you can put two or more things 
    color?: string // question mark means optionals 
}

const bird1: TBird ={wings: 2 ,beak: true ,feathers: 2000, color:'red'}
const bird2: TBird ={wings:5, beak:false,feathers:2 ,color:'blue'}
const bird3: TBird ={wings:30 ,beak:true,feathers: 'none', color:'darkBlue'}

/**
 * Interface in typecript 
 */
import { IHasKilled , IBird, IKilllerBirds } from "./interfaces"
const owl: IBird = {
    wings:2,
    nocturnal:true,
    family:['Joe', 'Jane' ,'Jack'],
    flies:true

}





const eagle: IKilllerBirds = {
    wings:2,
    nocturnal:true,
    flies:true,
    family:['Joe', 'Jane' ,'Jack'],
    edible: true,
    hasKilled:[
        {type: 'racoon', weight: 12, color: 'darkbrown'},
        {type: 'rat', weight: 1, color: 'darkgray'},
        {type: 'Andys puppy' , weight: 0.5 , color: 'yellow'},
    ],
    phoneNumber :34534654656
}

