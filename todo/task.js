const form = document.querySelector("form");
const list = document.querySelector(".tasks__list");
const input = document.querySelector(".tasks__input");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    list.insertAdjacentHTML("beforeend", `<div class="task">
    <div class="task__title">
      ${input.value}
    </div>
    <a href="#" class="task__remove">&times;</a>
  </div>`)
    form.reset();
    deleteDiv();
})

function deleteDiv() {
    const tasks = document.querySelectorAll(".task");
    tasks.forEach((elem) => {
    elem.addEventListener("click", (event) => {
        let div = event.target.closest(".task");
        div.remove();
    })
})
}