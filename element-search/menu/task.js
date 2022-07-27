let getMenuLink = Array.from(document.querySelectorAll(".menu__link"));

getMenuLink.forEach(link => link.addEventListener("click", (event) => {

    let activeMenuSub = document.querySelector(".menu_active");

    if (link.closest(".menu__item").querySelector(".menu_sub")) {
    if (event.target.closest(".menu__item").querySelector(".menu_sub").classList.contains("menu_active")) {
        event.preventDefault();
        activeMenuSub.classList.remove("menu_active");
        return 
    }}
    if (activeMenuSub) {
        activeMenuSub.classList.remove("menu_active")   
    }
    if (link.closest(".menu__item").querySelector(".menu_sub")) {
        event.preventDefault();
        link.closest(".menu__item").querySelector(".menu_sub").classList.add("menu_active")
    }
}));