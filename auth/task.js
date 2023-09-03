const form = document.querySelector("#signin__form");
const welcome = document.querySelector(".welcome");
const id = document.querySelector("#user_id");
const controls = document.querySelectorAll(".control")

if(localStorage.getItem("id")) {
    welcome.classList.add("welcome_active");
    id.innerHTML = localStorage.getItem("id");
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = {};
    controls.forEach((elem) => {
        formData[elem.name] = elem.value;
    })
    fetch("https://students.netoservices.ru/nestjs-backend/auth", {
        method: "POST", 
        body: JSON.stringify(formData),
        headers: {
            accept: "application/json",
            "content-type": "application/json",
        }
    }).then((res) => res.json()).then((data) => {
        if(data.success) {
            localStorage.setItem("id", data.user_id)
            welcome.classList.add("welcome_active")
            id.innerHTML = data.user_id;
        } else {
            welcome.classList.remove("welcome_active")
            alert("Неверный логин/пароль")
        }
    })
})