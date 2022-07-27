const productQuantityControls = Array.from(document.querySelectorAll(".product__quantity-controls"));

for (let i = 0; i < productQuantityControls.length; i++) {
  const productQuantityValue = productQuantityControls[i].querySelector(".product__quantity-value");
  const productQuantityControlDec = productQuantityControls[i].querySelector(".product__quantity-control_dec");
  const productQuantityControlInc = productQuantityControls[i].querySelector(".product__quantity-control_inc");

  productQuantityControlInc.addEventListener("click", (e) => productQuantityValue.innerText++);
  productQuantityControlDec.addEventListener("click", (e) => {
    if (productQuantityValue.innerText > 1) {
      productQuantityValue.innerText--;
    } else {
      productQuantityValue.innerText = 1;
    };
  });
};

const cartProducts = document.querySelector(".cart__products");
addEventListener("click", (e) => {
  const target = e.target;

  if(target.classList.contains("product__add")) {
    const product = target.closest(".product");
    const productId = product.dataset.id;
    const productImage = product.querySelector(".product__image").src;
    const productCart = cartProducts.querySelector(`[data-id="${productId}"]`);
    const productValue = product.querySelector(".product__quantity-value").innerText;
    
    if (productCart) {
      const cartProductCount = productCart.querySelector(".cart__product-count");
      cartProductCount.innerText = parseInt(productValue) + parseInt(productCount.innerText);
    } else {
      cartProducts.insertAdjacentHTML("beforeend", imageCartProduct(productImage, productValue, productId));
    };
  };
});

const imageCartProduct = (img, productValue, id) => {
    return `<div class="cart__product" data-id="${id}">
    <img class="cart__product-image" src="${img}">
    <div class="cart__product-count">${productValue}</div>
    </div>`;
};