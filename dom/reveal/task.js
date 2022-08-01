const reveal = Array.from(document.querySelectorAll(".reveal"));

function isVisible (el) {
    const { top, bottom } = el.getBoundingClientRect();
    if (bottom < 0) {
        el.classList.remove("reveal_active"); 
    }
    if (top > window.innerHeight) {
        el.classList.remove("reveal_active");
    }
    el.classList.add("reveal_active");
}
let openBlocks  = () => reveal.forEach(e => isVisible(e))
document.addEventListener("scroll", openBlocks)