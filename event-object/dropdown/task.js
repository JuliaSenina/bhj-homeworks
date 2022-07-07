const dropdownList = document.querySelector(".dropdown__list");
const dropdownValue = document.querySelector(".dropdown__value");

dropdownValue.onclick = function() {
  dropdownList.className = "dropdown__list dropdown__list_active";
};

const dropdownItem = Array.from(document.querySelectorAll(".dropdown__item"));

for(let i = 0; i < dropdownItem.length; i++) {
  dropdownItem[i].onclick = function() {
    dropdownList.className = "dropdown__list";
    dropdownValue.textContent = dropdownItem[i].textContent;
    return false;
  };
};