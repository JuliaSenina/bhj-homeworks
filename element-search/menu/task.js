const menuLink = Array.from(document.querySelectorAll(".menu__link"));


for (let i = 0; i < menuLink.length; i++) {
  const menuSub = menuLink[i].closest(".menu_sub");
  const link = menuLink[i].querySelectorAll("a");
  
  menuLink[i].onclick = function() {
    if(menuSub && link != null) {
      menuSub.className = "menu menu_sub menu_active";
      console.log(menuSub.className);
    if(menuSub.className = "menu menu_sub menu_active") {
      menuSub.className = "menu menu_sub";
    };
    return false;
    };
  };
};
