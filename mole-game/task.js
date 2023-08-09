let hole = document.querySelectorAll(".hole");
let dead = document.querySelector("#dead");
let lost = document.querySelector("#lost");


function reset(message) {
    alert(message);
        dead.textContent = 0;
        lost.textContent = 0;
}

hole.forEach((elem) => {
    elem.onclick = (event) => {
        if(event.target.classList.contains("hole_has-mole")){
            dead.textContent++;
            if(dead.textContent == 10) {
                reset("Вы победили!")
            }
        } else {
            lost.textContent++;
            if(lost.textContent == 5) {
                reset("Вы проиграли!");
            }
        }
    }
})