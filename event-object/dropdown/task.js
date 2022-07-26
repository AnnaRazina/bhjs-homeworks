const dropdownItem = Array.from(document.querySelectorAll(".dropdown__item"));
console.log(dropdownItem);
let dropdownValue = document.querySelectorAll(".dropdown__value");
console.log(dropdownValue);
//let dropdownList = document.querySelector(".dropdown__list");
//console.log(dropdownList);
let dropdownList = dropdownValue[0].nextElementSibling
console.log(dropdownList);



//if (dropdownList.classList.contains("dropdown__list_active")) {
   
    dropdownItem.forEach(element => {element.addEventListener("click", (event) => {
        let href = event.target.getAttribute('href');
console.log(element)
})
    
})
//}

dropdownValue[0].addEventListener("click", () => {
    //if(dropdownItem.length > 0) {
     dropdownList.classList.toggle("dropdown__list_active")
   // }
 })