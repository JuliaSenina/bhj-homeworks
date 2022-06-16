const hole = document.getElementsByClassName("hole");
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

function reset() {
  dead.textContent = 0;
  lost.textContent = 0;
};

for (let i = 0; i < hole.length; i++) {
  hole[i].onclick = function () {
    if (hole[i].className.includes("hole_has-mole")) {
      dead.textContent++;
      if (dead.textContent === "10") {
        alert("Победа!");  
        reset();
      };
    } else {
      lost.textContent++;
        if (lost.textContent === "5") {
          alert("Вы проиграли!");   
          reset();
        };
    };
  };
};

