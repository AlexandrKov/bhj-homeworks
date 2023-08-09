let counter = document.querySelector("#clicker__counter")
let cookie = document.querySelector(".clicker__cookie");
let count = 0;

function changeCookie(){
    cookie.width = 250;
}

cookie.onclick = function () {
    count++;
    counter.innerHTML = count;
    if(count % 2 !== 0) {
        changeCookie();
    } else {
        cookie.width = 200;
    }
}
