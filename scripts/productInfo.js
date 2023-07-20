import { productServices } from "../services/product-service.js";
import nuevoProducto from "./divProductMaker.js";

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("product_id");

console.log(productId);
const product = await productServices.getOne(productId);
const products = await productServices.getAll();

console.log(product);

const productImg = document.querySelector(".productInfo-data-img");
const productName = document.querySelector(".productInfo-data-texts-title");
const productPrice = document.querySelector(".productInfo-data-texts-price");
const productDesc = document.querySelector(".productInfo-data-texts-desc");

const similar = products.filter((productS) =>
  productS.category.toLowerCase().includes(product.category.toLowerCase())
);

const similarProductsGrid = document.querySelector(
  ".productInfo-similar-products-grid"
);

productImg.src = product.imageUrl;
productName.innerHTML = product.name;
productPrice.innerHTML = product.price;
productDesc.innerHTML = product.description;

if (similar || similar.length > 4) {
  console.log(similar.slice(0, 4));
  similar.slice(0, 4).forEach((s) => {
    similarProductsGrid.appendChild(
      nuevoProducto(s.name, s.imageUrl, s.price, s.id)
    );
  });
}
