
function setToggle() {
    if (document.querySelector("#content").classList.contains("dark") == true){
        document.querySelector("#content").classList.remove("dark");
        document.querySelector("#content").classList.toggle("light");
    } else {
        document.querySelector("#content").classList.remove("light");
    document.querySelector("#content").classList.toggle("dark")
    }
}