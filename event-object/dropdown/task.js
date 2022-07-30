let dropdownValue = Array.from(document.querySelectorAll(".dropdown__value"));

function oupenDropdownList () {
  dropdownValue.forEach(element => {element.addEventListener("click", (event) => {
      event.preventDefault();
      let dropdownList = element.nextElementSibling;
      if(dropdownList) {dropdownList.classList.toggle("dropdown__list_active")
      } else {return}

      let dropdownListActive = Array.from(document.querySelectorAll(".dropdown__list_active"));
    
      if(dropdownListActive.length > 0) {
         for(let i = 0; i < dropdownListActive.length; i++) {
          let dropdownItem = Array.from(dropdownListActive[i].children);
          dropdownItem.forEach(el => {el.addEventListener("click", (event) => {
            event.preventDefault() 
            let item = el.textContent;
            let btnDropdownItem = dropdownListActive[i].previousElementSibling;
            btnDropdownItem.textContent = item;
            dropdownListActive[i].classList.remove("dropdown__list_active")
            })})
         }    
      }
  })})
}
oupenDropdownList()