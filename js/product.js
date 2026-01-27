import { productData } from './product_data.js';

const productInfoBox = document.querySelector('.produc__info-box');

function productFnc(obj) {
    // window.location.href = '../products.html'
    productInfoBox.innerHTML = `
        <h2 class="product__title">${obj.title}</h2>

        <div class="product__main-text">
        <div class="product__suptitle">
            ${obj.suptitle}
        </div>
    <div class="product__image"><img src="${obj.image}" alt=""></div>
    </div>
        <div class="product__small-text">
            ${obj.smallText}
        </div>
    `;
}

// вызов функции
productFnc(productData[0]);
