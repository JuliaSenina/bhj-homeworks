const menuSub = Array.from(document.querySelectorAll(".menu_sub"));

for (let i = 0; i < menuSub.length; i++) {
  const menuItem = menuSub[i].closest(".menu__item");
  const menuLink = Array.from(menuItem.querySelectorAll(".menu__link"));

  menuLink[i].onclick = function() {
    menuSub[i].className = "menu menu_sub menu_active";
    
    const menuActive = document.querySelector(".menu_active");
    console.log(menuActive);
      if (menuActive === true) {
        menuActive.className = "menu menu_sub"; 
      };

      if (menuActive === menuSub[i]) {
        return false;
      };
  };
};