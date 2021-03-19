function check(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return ""
        }
    }
    return num
}

let str = ""
for (let i = 2; i < 100; i++) {
    if (check(i) != "") {
        str += check(i) + ", ";
    }
}
document.writeln(str)



