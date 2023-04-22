function multiply(a:number,b:number):number{
    return a*b;
}

let a:number;
let b:string;
let c:boolean;
let d:any;

function add(a:number,b:number):void{
    //可以无返回值
}
let arr:number[];
let arr2:number[][];

arr2=[
    [1,2,3],
    [4,5,6],
]

let point:[number,number,number?];  //元组

point=[1,2,3]

let color:number|string;

color = 1;
color = "black";

interface Color{
    name:string;
    age:number;
}

let color2:Color={
    name: 'intrinsic',
    age:10
}
console.log(color2);
