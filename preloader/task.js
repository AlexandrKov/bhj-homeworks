const items = document.querySelector("#items");
const loader = document.querySelector("#loader");

fetch("https://students.netoservices.ru/nestjs-backend/slow-get-courses").then((res) => res.json()).then((data) => {
    loader.classList.remove("loader_active")
    for(let key in data.response.Valute) {
        items.insertAdjacentHTML("beforeend", `<div class="item">
        <div class="item__code">
                ${data.response.Valute[key].CharCode}
            </div>
            <div class="item__value">
            ${data.response.Valute[key].Value}
            </div>
            <div class="item__currency">
                руб.
            </div>
      </div>`)
    }
})