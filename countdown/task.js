let timer = document.querySelector("#timer");

let interval = setInterval(timeOut, 1000);

function timeOut() {
    timer.innerHTML--;
    if(timer.innerHTML < 0) {
        
        clearInterval(interval)
        alert("Вы победили в конкурсе!");
        timer.innerHTML = 0;
    } 
}