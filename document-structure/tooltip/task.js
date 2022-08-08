let hasTooltip = Array.from(document.querySelectorAll(".has-tooltip"));

function getPosicion (elem) {
    let block = elem.getBoundingClientRect();
    return {
        top: block.top + window.pageYOffset,
        bottom: block.bottom + window.pageYOffset,
        right: block.right + window.pageXOffset,
        left: block.left + window.pageXOffset,
    }
}

hasTooltip.forEach(el => {
    let tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    tooltip.append(el.title);
    el.append(tooltip);

    el.addEventListener("click", (event) => {
        event.preventDefault();
        let posicion = getPosicion(el);

        tooltip.style.left = posicion.left + "px";
        tooltip.style.top = posicion.bottom + "px";
        tooltip.style.position = "absolute";

        if (el.firstElementChild.classList.contains("tooltip_active")) {
            el.firstElementChild.classList.remove("tooltip_active")
        } else if (document.querySelector(".tooltip_active")) {
            document.querySelector(".tooltip_active").classList.remove("tooltip_active");
            el.firstElementChild.classList.add("tooltip_active")
       } else {
            tooltip.classList.add("tooltip_active");
        }
    })
})