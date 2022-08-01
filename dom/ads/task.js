let rotatorCase = Array.from(document.querySelectorAll(".rotator"));

let rotator1;
if (rotatorCase) {
    rotator1 = rotatorCase[0].closest("p");
    rotator1.classList.add("I_am");
}
let rotatorCases = Array.from(document.querySelectorAll(".rotator__case"));

let rotatorCasesRotator1 = [];
  for (const item of rotatorCases){
      if (item.closest(".I_am")) {
          rotatorCasesRotator1.push(item);
      }
  }

let rotator1AdChange  = () => {
    let indexCaseRotator1 = rotatorCasesRotator1.indexOf(document.querySelector(".rotator__case_active"));
        if(indexCaseRotator1 === rotatorCasesRotator1.length - 1) {
            rotatorCasesRotator1[indexCaseRotator1].classList.remove("rotator__case_active");
            rotatorCasesRotator1[0].classList.add("rotator__case_active");
            return 
        }
        if(indexCaseRotator1 > -1 && indexCaseRotator1 < rotatorCasesRotator1.length) {
            rotatorCasesRotator1[indexCaseRotator1].classList.remove("rotator__case_active");
            indexCaseRotator1 += 1;
            rotatorCasesRotator1[indexCaseRotator1].classList.add("rotator__case_active");
            return 
        }
}

let timerId = setInterval(rotator1AdChange, 1000);