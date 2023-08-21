let a = document.querySelectorAll(".font-size");
let content = document.querySelector(".book__content");

a.forEach((elem) => {
    elem.addEventListener("click", (event) => {
        event.preventDefault();
        let target = event.target;
        a.forEach((el) => {
            el.classList.remove("font-size_active");
        })
        target.classList.add("font-size_active")

        let data = target.dataset.size;
            content.classList.remove("book_fs-big")
            content.classList.remove("book_fs-small")
            data && content.classList.add(`book_fs-${data}`)
    })
})