const items = document.getElementById("items");
const loaderActive = document.querySelector(".loader_active");

const xhr = new XMLHttpRequest();
xhr.addEventListener("load", () => {
  if (xhr.readyState === xhr.DONE || xhr.status === 200) {
    object = JSON.parse(xhr.responseText);
    objectValute = object.response.Valute;
    
    for (item in objectValute) {
      const charCode = objectValute[item].CharCode
      const value = objectValute[item].Value
      const html = `<div class="item__code">${charCode}</div>
        <div class="item__value">${value}</div>
        <div class="item__currency">руб.</div>`
      element = document.createElement("div");
      element.className = "item";
      element.innerHTML = html;
      items.append(element);
    };

    loaderActive.classList.remove("loader_active")
  };
});

xhr.open("GET", "https://netology-slow-rest.herokuapp.com");
xhr.send();