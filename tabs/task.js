let tab = document.querySelectorAll(".tab");
let content = document.querySelectorAll(".tab__content");


    tab.forEach((elem, index) => {
        elem.onclick = () => {
            content.forEach((con, ind) => {
                con.classList.remove("tab__content_active")
                tab[ind].classList.remove("tab_active")
            })
            tab[index].classList.add("tab_active")
            content[index].classList.add("tab__content_active")
        }
        
    })
