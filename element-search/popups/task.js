const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");
const modalClose = document.getElementsByClassName("modal__close");
const showSuccess = document.querySelector(".show-success");

for (let i = 0; i < modalClose.length; i++) {
    modalClose[i].onclick = function() {
      modalMain.style.display = "none";
      modalSuccess.style.display = "none";
    };
};

showSuccess.onclick = function() {
  modalSuccess.className = "modal modal_active";
  modalMain.className = "modal";
}
