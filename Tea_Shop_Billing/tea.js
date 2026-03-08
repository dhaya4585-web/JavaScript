function show()
{
    const sel=document.getElementById('item').value;
    const tea=document.getElementById('tea');
    const snack=document.getElementById('snack');

    if(sel === "TEA")
    {
        tea.style.display="table";
        snack.style.display="none";
        

    }
    else if(sel === "SNACK")
    {
         snack.style.display="table";
         tea.style.display="none";
    }
    else{
        alert("select option");
    }
}
function calc(el)
{
            const row=el.parentElement.parentElement;

            const amt=row.querySelector(".amt").innerText;
            const qty=el.value;

            const tot=amt * qty;
            row.querySelector(".tot").value=tot;
}
function bill()
{
    
    const totals = document.querySelectorAll(".tot");

    let sum = 0;
    let bill = "----- BILL -----\n";

    totals.forEach((t)=>
    {
        let val = Number(t.value);

        if(val>0)
        {
            const row = t.parentElement.parentElement;
            const name = row.children[1].innerText;

            bill += name + " : ₹" + val + "\n";
            sum += val;
        }
    });

    bill += "----------------\n";
    bill += "TOTAL = ₹" + sum;
    localStorage.setItem("TOTAL=",bill);
    alert(bill);
    qty.forEach(q => q.value = "");
    totals.forEach(t => t.value = "");
}