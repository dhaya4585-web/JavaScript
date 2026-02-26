function outter()
{
 
    let count=0;
    function inner(input)
    {
        if(input=='add')
        {
            return ++count;
        }
        else if(input=='sub' && count>0)
        {
            return --count;
        }
        else{
            return 0;
        }
        
    }
    return inner;
}
const final=outter();
function qty(input)
{
    let val=final(input);
    let msg=document.getElementById('msg');
    msg.textContent=val;
     
}