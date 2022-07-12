const rotatorCase = Array.from(document.querySelectorAll(".rotator__case"));

setInterval(() => {
  const rotatorCaseActive = document.querySelector(".rotator__case_active");
  const nextRotatorCase = rotatorCaseActive.nextElementSibling;

  rotatorCaseActive.classList.toggle("rotator__case_active");
  
    if (nextRotatorCase === null) {
      rotatorCase[0].classList.toggle("rotator__case_active");
    } else {
      nextRotatorCase.classList.toggle("rotator__case_active");
    }
}, 1000);