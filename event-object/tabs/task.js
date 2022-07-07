const tab = Array.from(document.querySelectorAll(".tab"));
const tabСontent = Array.from(document.querySelectorAll(".tab__content"));

for (let i = 0; i < tab.length; i++) {
  tab[i].onclick = function () {
    tab[i].className = "tab tab_active";
    const tabActive = document.querySelector(".tab_active");
      if (tabActive) {
        tabActive.className("tab");
      };

    let idTab = tab.indexOf(tab[i]);
    tabСontent.forEach((element, index) => {
      if (index != idTab) {
        element.className = "tab__content";
      } else {
        element.className = "tab__content_active";
      };
    });
  };
};