const menuLink = Array.from(document.querySelectorAll(".menu__link"));

for (let i = 0; i < menuLink.length; i++) {
  const menuSub = menuLink[i].closest("ul");
  if(menuSub != null) {
    menuLink[i].onclick = function() {
    menuSub.className = "menu menu_sub menu_active";
    return false;
    };
  };
};

