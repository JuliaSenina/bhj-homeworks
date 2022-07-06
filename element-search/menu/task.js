const menuSub = Array.from(document.querySelectorAll(".menu_sub"));

for (let i = 0; i < menuSub.length; i++) {
  const menuItem = menuSub[i].closest(".menu__item");
  const menuLink = menuItem.querySelector(".menu__link");
  
  menuLink.onclick = function() { 
    const menuActive = document.querySelector(".menu_active"); 
      if (menuActive) {
        menuActive.className = "menu menu_sub"; 
      };  

      if (menuActive !== menuSub[i]) {
        menuSub[i].className = "menu menu_sub menu_active";
      };

    return false;
  };
};