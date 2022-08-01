const progress = document.getElementById("progress");
const form = document.getElementById("form");

form.addEventListener("submit", function(item) {
  item.preventDefault();
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
    
  xhr.upload.onprogress = function(item) {
    progress.value = item.loaded / item.total;
    console.log(`Отправлено ${item.loaded} из ${item.total}`);
  };

  xhr.send(formData);
  xhr.onload = () => alert(xhr.status);
});