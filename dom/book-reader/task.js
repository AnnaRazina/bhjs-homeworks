let controlFontSize = Array.from(document.querySelectorAll(".font-size"));

let book = document.getElementById("book");

controlFontSize.forEach(element => element.addEventListener("click", (event) => {
    event.preventDefault()
    let activeControlFontSize = document.querySelector(".font-size_active");
    if(activeControlFontSize && event.target.classList.contains("font-size_active")) {
        return
    }
    if(activeControlFontSize) {
    activeControlFontSize.classList.remove("font-size_active");
    element.classList.add("font-size_active");
        if(element.classList.contains("font-size_small")) {
            book.classList.remove("book_fs-big");
            book.classList.add("book_fs-small");
            return
        }
        if(element.classList.contains("font-size_big")) {
            book.classList.remove("book_fs-small");
            book.classList.add("book_fs-big");
            return
        }
        book.classList.remove("book_fs-small", "book_fs-big")
    }
}))