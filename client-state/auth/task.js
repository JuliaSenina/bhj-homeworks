const signinForm = document.getElementById("signin__form");
const signinBtn = document.getElementById("signin__btn");
const welcome = document.querySelector(".welcome");
const signin = document.getElementById("signin");

signinBtn.addEventListener("click", function() {
  signinForm.addEventListener("submit", function(elem) {
    elem.preventDefault();
    const formData = new FormData(signinForm);
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.addEventListener("load", () => {
      response_obj = xhr.response;
      if (response_obj.success) {
        localStorage.setItem("user_id", response_obj.user_id);
        welcome.textContent = welcome.textContent + localStorage.getItem("user_id");
        welcome.classList.add("welcome_active");
      } else {
        alert("Неверный логин/пароль"); 
      };
    });

    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
    xhr.send(formData);
    signinForm.reset();
  });
});

if (localStorage.getItem("id") !== null) {
  signin.classList.remove("signin_active");
  welcome.classList.add("welcome_active");
  welcome.textContent = welcome.textContent + localStorage.getItem("id");
};
