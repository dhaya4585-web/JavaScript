let num=153;
let temp=num;
let rev=0;
while (num > 0) 
    {
            let rem= num % 10;
            rev= rev+ (rem * rem * rem); // cube of digit
            num = Math.floor(num / 10);
        }
        if (rev == temp)
             {
           console.log("Armstrong Number");
          
        } else {
            console.log("Not Armstrong Number");
        }