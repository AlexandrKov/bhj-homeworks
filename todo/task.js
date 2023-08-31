const form = document.querySelector("form");
const list = document.querySelector(".tasks__list");
const input = document.querySelector(".tasks__input");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if(input.value.trim() !== "") {
      list.insertAdjacentHTML("beforeend", `<div class="task">
      <div class="task__title">
        ${input.value}
      </div>
      <a href="#" class="task__remove" onclick="deleteDiv(event)">&times;</a>
    </div>`)
      form.reset();
    } else {
      alert("Добавьте задачу!")
    }

})

function deleteDiv(event) {

        let div = event.target.closest(".task");
        div.remove();

}
