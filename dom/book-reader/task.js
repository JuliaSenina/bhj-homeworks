const fontSize = Array.from(document.querySelectorAll(".font-size"));
const book = document.getElementById("book");

fontSize.forEach(function(item) {

  item.onclick = function() {
    const fontSizeActive = document.querySelector(".font-size_active");
    fontSizeActive.classList.toggle("font-size_active");
    item.classList.toggle("font-size_active");

    if (item.classList.contains("font-size_small")) {
      book.classList.remove("book_fs-big");
      book.classList.add("book_fs-small");
    };
    if (item.classList.contains("font-size_big")) {
      book.classList.remove("book_fs-small");
      book.classList.add("book_fs-big");
    };
    if (!(item.classList.contains("font-size_small")) && !(item.classList.contains("font-size_big"))) {
      book.classList.remove("book_fs-small");
      book.classList.remove("book_fs-big");
    };
        
    return false
  };
});