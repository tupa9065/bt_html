function check(num){
    let str="";

    for (let i=2;i<num;i++){
        if(num%i==0){
            str="1"
            return "không phải số nguyên tố"

        }

    }
    if(str==""){
        return "là số nguyên tố"
    }
}
let num=prompt();
let value=check(num);

document.write(num+" "+value);