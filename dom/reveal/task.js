const reveal = Array.from(document.querySelectorAll(".reveal"));

window.onscroll = function() {  
  for (let i = 0; i < reveal.length; i++) {
    const {top, bottom} = reveal[i].getBoundingClientRect();

      if (top < window.innerHeight) {
        reveal[i].classList.add("reveal_active");
      };

      if (bottom < 0) {
        reveal[i].classList.remove("reveal_active");
      };
  };
};