const hasTooltip = Array.from(document.querySelectorAll(".has-tooltip"));

hasTooltip.forEach(function(item) {
    
  item.onclick = function() {
    const rect = item.getBoundingClientRect();
    const tooltips = document.querySelector(".tooltip");

    if (item.nextElementSibling === null || item.nextElementSibling.classList.contains("tooltip") === false) {

      item.insertAdjacentHTML("afterend", `
        <div class="tooltip" style="left: 0; top: 0"></div>
      `);

      const tooltip = item.nextElementSibling;
      tooltip.textContent = item.getAttribute("title");
      tooltip.classList.add("tooltip_active");
      tooltip.style.top = (String(rect.bottom) + "px");
      tooltip.style.left = (String(rect.left) + "px");
      return false;
    };

    if (tooltips.classList.contains("tooltip_active")) {
      tooltips.classList.remove("tooltip_active");
      return false;
    }
  };
});
