const shoppingCart = document.querySelector('.cart__products');
const productList = document.querySelectorAll('.product');
const productTitle = document.querySelectorAll('.product__title');
const productImg = document.querySelectorAll('.product__image');
const productQuantity = document.querySelectorAll('.product__quantity');
const productQuantityValue = document.querySelectorAll('.product__quantity-value');
const productQuantityMinus = document.querySelectorAll('.product__quantity-control_dec');
const productQuantityPlus = document.querySelectorAll('.product__quantity-control_inc');
const btnAddToCart = document.querySelectorAll('.product__add');
const productCounter = [];

for (let i = 0; i <= productQuantityValue.length - 1; i++) {
  productCounter[i] = productQuantityValue[i].innerText;
}

const reduceProductQuantity = (index) => {
  if (productCounter[index] === 1) {
    return;
  } else {
    productCounter[index] -= 1;
  }
}

const increaseProductQuantity = (index) => {
  productCounter[index]++;
}

for (let i = 0; i <= productTitle.length - 1; i++) {
  productQuantityMinus[i].addEventListener('click', (event) => {
    if (Number(productQuantityValue[i].innerHTML) <= 1) {
      return;
    }
    reduceProductQuantity(i);
    productQuantityValue[i].innerHTML = productCounter[i];
  })
}

for (let i = 0; i <= productTitle.length - 1; i++) {
  productQuantityPlus[i].addEventListener('click', (event) => {
    increaseProductQuantity(i);
    productQuantityValue[i].innerHTML = productCounter[i];
  })
}

for (let i = 0; i <= btnAddToCart.length - 1; i++) {
  btnAddToCart[i].addEventListener('click', (event) => {
    event.preventDefault();

    const allProductsInCart = shoppingCart.querySelectorAll('[data-id]');
    const currentProductInCart = [...allProductsInCart].find(e => {
      if (e.dataset.id === productList[i].dataset.id) {
        return e;
      }
    })

    if (currentProductInCart) {
      const currentProductInCartQuantity = currentProductInCart.querySelector('.cart__product-count');
      currentProductInCartQuantity.innerHTML = Number(currentProductInCartQuantity.innerHTML) + Number(productQuantityValue[i].innerText);
    } else {
      shoppingCart.insertAdjacentHTML('afterbegin', ` <div class="cart__product"> <img class="cart__product-image"> <div class="cart__product-count"></div> </div> `);

      const productInCart = document.querySelector('.cart__product');
      productInCart.dataset.id = productList[i].dataset.id;

      const productInCartImg = document.querySelector('.cart__product-image');
      productInCartImg.setAttribute('src', productImg[i].src);

      const productInCartQuantity = document.querySelector('.cart__product-count');
      productInCartQuantity.innerHTML = productQuantityValue[i].innerText;
    }
  })
}
