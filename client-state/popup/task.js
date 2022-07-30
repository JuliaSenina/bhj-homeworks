const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__close");

document.addEventListener("DOMContentLoaded", () => {
  const cookie = getCookie("modal__close");
  if (cookie === "true") {
    modal.classList.remove("modal_active");
  } else {
    modal.classList.add("modal_active");
    modalClose.addEventListener("click", () => {
      modal.classList.remove("modal_active");
      setCookie("modal__close", "true");
    });
  };
});

function getCookie(name) {
  if (document.cookie.length > 0) {
    const pairs = document.cookie.split("; ");
    const cookie = pairs.find(p => p.startsWith(name + "="));
    return cookie.substring(name.length + 1)
  };   
};

function setCookie(name, value) {
    document.cookie = name + "=" + encodeURIComponent(value);
};