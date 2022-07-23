let modalMain = document.getElementById("modal_main");
let modalSuccess = document.getElementById("modal_success");
modalMain.classList.add("modal_active");

let modalClose =  Array.from(document.querySelectorAll(".modal__content div"));
let clickModalClose = () => {modalMain.classList.remove("modal_active"); modalSuccess.classList.remove("modal_active")};
modalClose[0].addEventListener("click", clickModalClose);
modalClose[1].addEventListener("click", clickModalClose);

let showSuccess = modalMain.getElementsByClassName("show-success"); 
let clickShowSuccess = () => {modalSuccess.classList.add("modal_active"); modalMain.classList.remove("modal_active")}; 
showSuccess[0].addEventListener("click", clickShowSuccess);