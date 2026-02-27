
const val={
    Firstname:"dhaya",
    Lastname:"nithi",
    Email:"dhaya4585@gmail.com",
}
function User(vall)
{
     const fullname=(vall.Firstname+" "+vall.Lastname).toUpperCase();
     const mail=vall.Email.split("@")[1];
     return {
        fullname:fullname,
        mail:mail
     }
}

const res=User(val);
console.log("FULLNAME:"+res.fullname);
console.log("E-mail:"+res.mail);

function outer()
{
   function inner(passval)
   {
    return{
         totchar:passval.length,
        totsen:passval.split(" ").length,
        lower:passval.toLowerCase()
    }
       
   }
   return inner;
}
const ress=outer();
console.log(ress("HELLO I AM JAVA DEVELOPER"))

function Username(name,phone)
{
    const uname=name.substring(0,3).toLowerCase();
    const ph=phone.toString().slice(-2);
    return uname+ph;
}
const result=Username("DHAYANITHI",9597114585);
console.log(result);