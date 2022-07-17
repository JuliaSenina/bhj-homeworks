const interestCheck = Array.from(document.querySelectorAll(".interest__check"));

for (let i = 0; i < interestCheck.length; i++) {
  interestCheck[i].addEventListener("click", () => {
    if (interestCheck[i].closest(".interests_active") === null) {
      const interestActive = interestCheck[i].querySelector(".interests_active");
      if (interestCheck[i].checked) {
        for (let j = 0; j < interestActive.length; j++) {
          interestActive[j].firstElementChild.checked = true;
        };
      } else {
          for (let j = 0; j < interestActive.length; j++) {
            interestActive[j].firstElementChild.checked = false;
          };
      };
    };
  });
};