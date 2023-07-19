import productos from "../services/productos.js";
import nuevoProducto from "./divProductMaker.js";

const productsGrid = document.querySelector(".products-grid");
const productsTitle = document.querySelector(".products-header-title");

const productData = await productos();

const urlParams = new URLSearchParams(window.location.search);
const searchedProducts = urlParams.get("searchString");
const searchedCategory = urlParams.get("searchCategory");

const found = productData.filter(
  (product) =>
    product.name.toLowerCase().includes(searchedProducts?.toLowerCase()) ||
    product.category.toLowerCase().includes(searchedCategory?.toLowerCase())
);

function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}

productsTitle.innerHTML = capitalize(searchedProducts || searchedCategory);

if (found) {
  found.forEach((product) => {
    productsGrid.appendChild(
      nuevoProducto(product.name, product.imageUrl, product.price, product.id)
    );
  });
}
