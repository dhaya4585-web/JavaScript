let ar=[10,20,95,31,12,25,42];
let max=ar[0];

for(let i=1;i<ar.length;i++)
{
    if(ar[i]>max)
    {
        max=ar[i];
    }
}
console.log(max)