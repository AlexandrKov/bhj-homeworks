let cases = document.querySelectorAll(".rotator__case");
let count = 0;

setInterval(() => {
    cases.forEach((elem) => {
        elem.classList.remove("rotator__case_active");
    })
    cases[count].classList.add("rotator__case_active")
    if(count == cases.length -1) {
        count = 0;
    } else {
        count++
    }
    
}, 1000)
