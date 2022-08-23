let elNav = document.querySelector(".sitenav");
let elBtn = document.querySelector(".open-btn");

elBtn.addEventListener("click", function(){
    elNav.classList.toggle("sitenav-show")
    elBtn.classList.toggle("open-btn-show")
})