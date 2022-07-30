const editor = document.getElementById("editor");

editor.value = localStorage.getItem("key");

editor.addEventListener("keyup", () => {
  localStorage.setItem("key", editor.value)
});