function minArr(arr){
    if(arr.length>0) {
        arr.sort(function (a, b) {
            return a - b;
        })
        return arr[0];
    }else {
        return "mảng rỗng";
    }
}
let arr1= [3, 5, 1, 8, -3, 7, 8];

let arr2= [7, 12, 6, 9, 20, 56, 89];

let arr3= [];

let arr4= [0, 0, 0, 0, 0, 0];

let min1=minArr(arr1);
let min2=minArr(arr2);
let min3=minArr(arr3);
let min4=minArr(arr4);

document.write("min arr1= "+min1+"<br>");
document.write("min arr2= "+min2+"<br>");
document.write("min arr3= "+min3+"<br>");
document.write("min arr4= "+min4+"<br>");