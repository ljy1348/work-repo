function innerhtml() {
    let selector = document.querySelector("#output");
    let today = new Date();
    selector.innerHTML = today;

}