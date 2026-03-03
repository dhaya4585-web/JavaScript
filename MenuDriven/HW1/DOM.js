
function Add()
{
    const num1=document.getElementById('a');
    const num2=document.getElementById('b');
    const res=Number(num1.value)+Number(num2.value);
    alert(num1.value+"+"+num2.value+"="+res);
}
function readtxt()
{
    const read=document.getElementById('textInput');
    const res=read.value;
    alert(res);
}
function changecss()
{
    const change=document.getElementById('box');
    change.style.backgroundColor='yellow';
    box.style.color = "red";
    box.style.fontSize = "20px";
}
function exit()
{
     alert("Exiting Program...");
     document.body.innerHTML = "<h2>Program Closed</h2>";
}