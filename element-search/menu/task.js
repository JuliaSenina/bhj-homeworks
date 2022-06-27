//const menuLink = document.querySelectorAll(".menu__link");
const menuItem = Array.from(document.querySelectorAll(".menu__item"));
const menuSub = document.querySelectorAll(".menu_sub");

for (let i = 0; i < menuItem.length; i++) {
  menuItem[i].onclick = function() {
    if(menuItem > menuSub) {
      menuSub.className = "menu menu_sub menu_active";
      console.log(menuSub.className);
    if(menuSub.className = "menu menu_sub menu_active") {
      menuSub.className = "menu menu_sub";
    };
    return false;
    };
  };
};
