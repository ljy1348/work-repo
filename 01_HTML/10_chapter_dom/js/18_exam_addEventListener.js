let select = document.querySelector("#cover");


select.addEventListener("mouseover", function() {
    select.src = "./images/boy.jpg"
})
select.addEventListener("mouseout", function() {
    select.src = "./images/girl.jpg"
})