let ar=[10,20,30,40]
console.log("Before add",ar)
let add=50
ar.push(add)
console.log("After add new element",ar)

let arr=[10,20,30,40]
console.log("Before remove",arr)
arr.pop(arr)
console.log("After removed element",arr)

let alter=[1,2,3,4,6]
console.log("before update element",alter)
let num=5
let old=6
for(var i=0;i<alter.length;i++)
{
    if(alter[i]==old)
    {
        alter[i]=num
    }
}
console.log("Update the value 6->5 ",alter)