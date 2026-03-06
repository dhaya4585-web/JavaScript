let num=123;
let temp=num;
let rev=0;

while(num>0)
{
    let dig=num%10;//last number varum
    rev=rev*10+dig;
    num=Math.floor(num/10);

}
console.log(rev);
if(rev==temp)
{
    console.log("palindrom")
}
else{
    console.log("not a palindrom")
}

