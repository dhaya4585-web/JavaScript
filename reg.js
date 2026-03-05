const myform=document.getElementById('pages');
async function asfun(ids) 
{
    const val=await fetch('https://jsonplaceholder.typicode.com/users/'+ids);
    const res=await val.json();
    const names=document.getElementById('name')
    const age=document.getElementById('age')
    const addresss=document.getElementById('address')
    const mail=document.getElementById('mail')
    const ph=document.getElementById('phone')
    const web=document.getElementById('website')

    names.value=res.name;
    age.value=res.age;
    ph.value=res.phone;
    addresss.value=res.address.street;
    mail.value=res.email;
}
function print(event)
{
    event.preventDefault();
    const ids=document.getElementById('ids');
    asfun(ids.value);
    console.log('jh')
}
myform.addEventListener('submit',print);
