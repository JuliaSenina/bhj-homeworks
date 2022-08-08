const hasTooltip = Array.from(document.querySelectorAll(".has-tooltip"));
const tooltip = document.createElement("div");
tooltip.setAttribute("class", "tooltip");
document.body.appendChild(tooltip);

hasTooltip.forEach(item => item.addEventListener("click", function(e) {
  if (item.title === tooltip.textContent) {
    tooltip.classList.toggle("tooltip_active");
  } else {
    tooltip.textContent = item.getAttribute("title")
    tooltip.classList.add("tooltip_active");
  };
  e.preventDefault();
  
  const itemLeft = item.getBoundingClientRect().left;
  const itemTop = item.getBoundingClientRect().top;
  tooltip.style.left = itemLeft + "px";
  tooltip.style.top = (itemTop + 20) + "px";
}));