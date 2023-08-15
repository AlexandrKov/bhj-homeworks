let btn = document.querySelector(".dropdown");
let list = document.querySelector(".dropdown__list");
let value = document.querySelector(".dropdown__value");
let items = document.querySelectorAll(".dropdown__item");

btn.onclick = () => {
    list.classList.toggle("dropdown__list_active");
}

items.forEach((elem, index) => {
    elem.onclick = () => {
                value.innerHTML = items[index].querySelector(".dropdown__link").innerHTML;
                return false;
            } 
})






