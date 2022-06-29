const menuSub = Array.from(document.querySelectorAll(".menu_sub"));

for (let i = 0; i < menuSub.length; i++) {
  const menuItem = menuSub[i].closest(".menu__item");
  const menuLink = menuItem.querySelectorAll(".menu__link");

  menuItem.onclick = function() {
    if(menuSub[i] && menuLink != null) {
      menuSub[i].className = "menu menu_sub menu_active";
      console.log(menuSub[i].className);
      let menuActive = menuItem.querySelector("ul").className.includes("menu_active");
      console.log(menuActive);
      if (menuActive === true) {
        menuItem.onclick = function() {
        menuSub[i].className = "menu menu_sub";
      };
    };
      return false;
    };
  };
};
