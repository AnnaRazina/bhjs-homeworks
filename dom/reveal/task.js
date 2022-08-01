const reveal = Array.from(document.querySelectorAll(".reveal"));

function openBlock () {
    reveal.forEach(el => {
    let block = ({top, bottom } = el.getBoundingClientRect());
        if (block.top > 0 && block.bottom < window.outerHeight) {
            el.classList.add("reveal_active"); 
        } else {
            el.classList.remove("reveal_active");
        }
    })
}

document.addEventListener("scroll", openBlock)