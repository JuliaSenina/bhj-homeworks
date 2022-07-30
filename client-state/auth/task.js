const signinForm = document.getElementById("signin__form");
const signinBtn = document.getElementById("signin__btn");
const welcome = document.querySelector(".welcome");

signinBtn.addEventListener("click", function() {
  signinForm.addEventListener("submit", function(elem) {
    elem.preventDefault();
    const formData = new FormData(signinForm);
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", () => {
        
      if(xhr.readyState === xhr.DONE){
        response_obj = JSON.parse(xhr.responseText);

        if (response_obj.success) {
          localStorage.setItem("user_id", response_obj.user_id);
          welcome.textContent = welcome.textContent + localStorage.getItem("user_id");
          welcome.classList.add("welcome_active");
        } else {
          alert("Неверный логин/пароль"); 
        };

      } else {
        alert("Ошибка " + xhr.status);
      };
    });

    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
    xhr.send(formData);
  });
});