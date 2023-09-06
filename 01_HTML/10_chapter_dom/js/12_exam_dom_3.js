function sum_avg(a1, a2, a3) {
    document.querySelector("#kor").innerHTML = a1;
    document.querySelector("#eng").innerHTML = a2;
    document.querySelector("#math").innerHTML = a3;
    document.querySelector("#sum").innerHTML = (a1+a2+a3);
    document.querySelector("#avg").innerHTML = (a1+a2+a3)/3;
}