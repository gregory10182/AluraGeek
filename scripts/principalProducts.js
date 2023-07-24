import { productServices } from "../services/product-service.js";
import nuevoProducto from "./divProductMaker.js";

let width;

const productData = await productServices.getAll();
const starWarsProducts = productData.filter(
  (product) => product.category === "StarWars"
);
const consoleProducts = productData.filter(
  (product) => product.category === "Consolas"
);
const diverseProducts = productData.filter(
  (product) => product.category === "Diversos"
);

const starWars = document.querySelector("#StarWars");
const Consolas = document.querySelector("#Consolas");
const Diversos = document.querySelector("#Diversos");

const placeProducts = () => {
  width = window.innerWidth;

  starWars.textContent = "";
  Consolas.textContent = "";
  Diversos.textContent = "";
  if (width < 1440) {
    starWarsProducts.slice(0, 4).forEach((product) => {
      starWars.appendChild(
        nuevoProducto(product.name, product.imageUrl, product.price, product.id)
      );
    });

    consoleProducts.slice(0, 4).forEach((product) => {
      Consolas.appendChild(
        nuevoProducto(product.name, product.imageUrl, product.price, product.id)
      );
    });

    diverseProducts.slice(0, 4).forEach((product) => {
      Diversos.appendChild(
        nuevoProducto(product.name, product.imageUrl, product.price, product.id)
      );
    });
  } else {
    starWarsProducts.slice(0, 6).forEach((product) => {
      starWars.appendChild(
        nuevoProducto(product.name, product.imageUrl, product.price, product.id)
      );
    });

    consoleProducts.slice(0, 6).forEach((product) => {
      Consolas.appendChild(
        nuevoProducto(product.name, product.imageUrl, product.price, product.id)
      );
    });

    diverseProducts.slice(0, 6).forEach((product) => {
      Diversos.appendChild(
        nuevoProducto(product.name, product.imageUrl, product.price, product.id)
      );
    });
  }
};

placeProducts();

window.addEventListener("resize", placeProducts);
