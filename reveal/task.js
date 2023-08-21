const reveals = document.querySelectorAll('.reveal');
let innerHeight = window.innerHeight;

window.addEventListener('scroll', () => {
    reveals.forEach((elem) => {
        if(elem.getBoundingClientRect().top >= 0 && elem.getBoundingClientRect().bottom <= innerHeight) {
            elem.classList.add('reveal_active') 
        } else {
            elem.classList.remove('reveal_active')
        }
    })
  });