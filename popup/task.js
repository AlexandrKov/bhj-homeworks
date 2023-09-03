const closeBtn = document.querySelector(".modal__close");
const modal = document.querySelector(".modal");

closeBtn.addEventListener("click", () => {
    modal.classList.remove("modal_active")
    document.cookie = "open=false";
})
console.log(document.cookie)
if(document.cookie == "") {
    modal.classList.add("modal_active")
}

