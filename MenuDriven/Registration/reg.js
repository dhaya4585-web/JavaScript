const uname=document.getElementById('usname');
const umail=document.getElementById('usmail');
const upass=document.getElementById('uspass');
const btnS=document.getElementById('btn');
const color=document.getElementById('regcss');

function reload(event)
{

   
    


    if(uname.value ==="")
    {
        alert("Username is required");
        uname.focus();
         event.preventDefault();
    }
    else if(umail.value ==="")
    {
        alert("E-mail is required")
        umail.focus();
         event.preventDefault();
    }
    else if(upass.value ==="")
    {
        alert("Password is required")
        upass.focus();
         event.preventDefault();
    }
    else{
        btnS.innerText='Sumbitted';
        btnS.style.backgroundColor='yellow';
        btnS.style.color='black';
        event.preventDefault();
    }
}
btnS.addEventListener("click", reload);
