let num=[];
let x=0;
function addNum(){
    num[x]=document.getElementById('tx1').value;
    x++;
    console.log(num[x]);
    document.getElementById('tx1').value="";
}

function displayNum(){
    let dl='';
    for (let i = 0; i < num.length; i++) {
       dl +="Element"+i+' = '+num[i]+'<br>';
    }
    document.getElementById('p1').innerHTML=dl;
}