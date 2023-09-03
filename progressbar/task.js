const progress = document.querySelector("#progress")

document.forms.form.addEventListener("submit", (e) => {
    e.preventDefault()

    const xhr = new XMLHttpRequest()
    xhr.addEventListener("progress",(e) => {
    })
    xhr.addEventListener("readystatechange", (e) => {
        progress.value = (+xhr.readyState * 2.5) / 10;
        if(xhr.readyState === xhr.DONE) {

        }
    })
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload")
    const formData = new FormData(document.forms.form)
    xhr.send(formData)
})