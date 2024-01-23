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

/* 
const Product = {
  imageSrc,
  title,
  quantity,
  constructor(product) {
    this.imageSrc = product.querySelector('.product__image').src;
    this.title = product.querySelector('.product__title').innerText;
    this.quantity = product.querySelector('.product__quantity-value').innerText;
  }
}; 
*/

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

    //const product = new Product(card);

    const productInCart = document.createElement('div');
    productInCart.classList.add('cart__product');
    productInCart.dataset.id = productList[i].dataset.id;
    shoppingCart.appendChild(productInCart);

    const productInCartImg = document.createElement('img');
    productInCartImg.classList.add('cart__product-image');
    productInCartImg.setAttribute('src', productImg[i].src);
    productInCart.appendChild(productInCartImg);

    const productInCartQuantity = document.createElement('div');
    productInCartQuantity.classList.add('cart__product-count');
    productInCartQuantity.innerHTML = productQuantityValue[i].innerText;
    productInCart.appendChild(productInCartQuantity);
  })
}

/*ИСХОДНИК НА 23.02.24 23:30
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
const products = {};

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

    const productInCart = document.createElement('div');
    productInCart.classList.add('cart__product');
    productInCart.dataset.id = productList[i].dataset.id;
    shoppingCart.appendChild(productInCart);

    const productInCartImg = document.createElement('img');
    productInCartImg.classList.add('cart__product-image');
    productInCartImg.setAttribute('src', productImg[i].src);
    productInCart.appendChild(productInCartImg);

    const productInCartQuantity = document.createElement('div');
    productInCartQuantity.classList.add('cart__product-count');
    productInCartQuantity.innerHTML = productQuantityValue[i].innerText;
    productInCart.appendChild(productInCartQuantity);
  })
}
*/