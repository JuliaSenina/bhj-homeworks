const hasTooltip = Array.from(document.querySelectorAll(".has-tooltip"));
const tooltip = document.createElement("div");
tooltip.classList.add("tooltip");

hasTooltip.forEach(function(item) {
  item.addEventListener("click", function(event) {
    event.preventDefault();

    const tooltipActive = document.querySelector(".tooltip_active");
    const tooltips = Array.from(document.querySelectorAll(".tooltip"));

    if (tooltips.includes((e) => e.textContent === item.getAttribute("title"))) {
      tooltips.forEach((e) => {
        if (e.textContent === item.getAttribute("title")) {
          e.classList.toggle("tooltip_active");
        };
      });
    } else if (tooltipActive) {
      tooltipActive.classList.remove("tooltip_active");
    } else {
      tooltip.textContent = item.getAttribute("title");

      const itemLeft = item.getBoundingClientRect().left;
      const itemTop = item.getBoundingClientRect().top;
      tooltip.style.left = itemLeft + "px";
      tooltip.style.top = (itemTop + 20) + "px";

      item.appendChild(tooltip);
      tooltip.classList.add("tooltip_active");
    }
  });
})
