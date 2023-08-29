const products = document.querySelectorAll(".product");
const container = document.querySelector(".cart__products")
let arr = [];
products.forEach((elem) => {
    let btnPlus = elem.querySelector(".product__quantity-control_inc")
    let btnMinus = elem.querySelector(".product__quantity-control_dec")
    let count = 1;
    let countHTML = elem.querySelector(".product__quantity-value")
    let btnAdd = elem.querySelector(".product__add")
    btnPlus.addEventListener("click", () => {
        count++;
        countHTML.innerHTML = count;
    })

    btnMinus.addEventListener("click", () => {
        count--;
        if(count < 1) {
            count = 1
        }
        countHTML.innerHTML = count;
    })
    
    let id = elem.dataset.id
    let src = elem.querySelector(".product__image").src

    btnAdd.addEventListener("click", () => {
        if(!arr.includes(id)) {
            arr.push(id)
            container.insertAdjacentHTML("beforeend", `<div class="cart__product" data-id="${id}">
            <img class="cart__product-image" src="${src}">
            <div class="cart__product-count">${count}</div>
        </div`)
        } else {
            let el = document.querySelector(`[data-id="${id}"]`)
            let sum = el.querySelector(".cart__product-count")
            sum.innerHTML = +sum.innerHTML + count
        }

    })
})