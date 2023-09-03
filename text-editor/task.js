const editor = document.querySelector("#editor")
const btn = document.querySelector(".btn")

editor.addEventListener("keyup", () => {
    localStorage.textClient = editor.value;
})

let textClient = localStorage.getItem("textClient");

editor.value = textClient;

btn.addEventListener("click", () => {
    delete localStorage.textClient
    editor.value = ""
})