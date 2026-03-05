const myform=document.getElementById('page');

async function save() 
{

    const id=document.getElementById('ids').value;
    const names=document.getElementById('name').value;
    const age=document.getElementById('age').value;
    const addresss=document.getElementById('address').value;
    const mail=document.getElementById('mail').value;
    const ph=document.getElementById('phone').value;
    const web=document.getElementById('website').value;

    let data={
        id:id,
        name:names,
        age:age,
        address:addresss,
        email:mail,
        phone:ph,
        website:web

    };
    
    const val=await fetch('https://jsonplaceholder.typicode.com/users'+data,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(data)
    });

    const res=await val.json();
    console.log(res);
    
    alert(JSON.stringify(res))
}

