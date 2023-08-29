const hasTooltips = document.querySelectorAll(".has-tooltip");


hasTooltips.forEach((elem) => {
      elem.insertAdjacentHTML("afterend", `<div class="tooltip" style="left: 0; top: 0">
      </div>`)
      elem.addEventListener("click", (event) => {
        event.preventDefault()
        const tooltips = document.querySelectorAll(".tooltip")
        tooltips.forEach((el) => {
          if(el.innerHTML !== elem.title) {
            el.classList.remove("tooltip_active")
          }
        })
        let tooltip = elem.nextElementSibling
        tooltip.innerHTML = elem.title
        if(!tooltip.classList.contains("tooltip_active")) {
                tooltip.classList.add("tooltip_active")
              } else {
                tooltip.classList.remove("tooltip_active")
              }

    })
})

