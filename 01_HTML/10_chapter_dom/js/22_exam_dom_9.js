function get_pay(price, discount, shipping) {
    let result = price - (price * (discount/100)) + shipping;
    document.querySelector("#price").innerHTML = price+"원";
    document.querySelector("#discount").innerHTML = discount+"원";
    document.querySelector("#shipping").innerHTML = shipping+"원";
    document.querySelector("#pay").innerHTML = result+"원";
}