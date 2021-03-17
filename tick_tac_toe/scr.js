var arr=[["","",""],["","",""],["","",""]];
var table="<table>"
function hienthi(){
    for(let i =0;i<3;i++){
        table+="<tr>"
        for(let j=0;j<3;j++){
            let id=""+i+j;
            table+="<td onclick='danh(this.id, "+i+", "+j+")' id="+id+">"+arr[i][j]+"</td>"
        }
        table+="</tr>";
    }
    document.write(table);
}
hienthi();


var xo=2;
var turn=0;
function danh(id,i,j) {
    let value=document.getElementById(id).innerHTML;
    if(value == "")
    {

        if (xo % 2 === 0) {
            document.getElementById(id).innerHTML = "X";
            xo++;
            turn++;
        } else {
            document.getElementById(id).innerHTML = "0";
            xo++;
            turn++;
        }
        arr[i][j] = document.getElementById(id).innerHTML;
        checkWin();
    }

    function checkWin(){
        let winner="";
        for(let i=0;i<arr.length;i++){
            if(arr[i][0]==arr[i][1]&&arr[i][0]==arr[i][2]&&arr[i][0]!=""){
                winner=arr[i][0];
                alert("Winner:"+winner)
                break
            }

        }
        for(let i=0;i<arr.length;i++){
            if(arr[0][i]==arr[1][i]&&arr[0][i]==arr[2][i]&&arr[0][i]!=""){
                winner=arr[0][i];
                alert("Winner: "+winner)
                break
            }

        }
        if(arr[0][0]==arr[1][1]&&arr[0][0]==arr[2][2]&&arr[0][0]!=""){
            winner=arr[0][0];
            alert("Winner:"+winner)
        }
        if(arr[0][2]==arr[1][1]&&arr[0][2]==arr[2][0]&&arr[0][2]!=""){
            winner=arr[0][2];
            alert("Winner: "+winner)
        }

        if(turn==9 && winner==""){
            alert("draw");

        }

    }


}