let hasTooltip = Array.from(document.querySelectorAll(".has-tooltip"));
hasTooltip.forEach(el =>{ 
    let tooLtip = document.createElement("div");
    tooLtip.classList.add("tooltip");
    el.after(tooLtip);
    tooLtip.textContent = `${el.getAttribute("title")}`;
    
    el.addEventListener("click", (event) => {
    event.preventDefault();
    let posicion = el.getBoundingClientRect();
    el.nextSibling.setAttribute("style", `left: ${posicion.left}px; top: ${posicion.top + 20}px`);

    if (el.nextSibling.classList.contains("tooltip_active")) {
        el.nextSibling.classList.remove("tooltip_active")
    } else if (document.querySelector(".tooltip_active")) {
        document.querySelector(".tooltip_active").classList.remove("tooltip_active");
        el.nextSibling.classList.add("tooltip_active")
    } else {
        tooLtip.classList.add("tooltip_active");
    }
})})