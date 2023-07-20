import { productServices } from "../services/product-service.js";
import nuevoProducto from "./divProductMaker.js";

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
starWarsProducts.forEach((product) => {
  starWars.appendChild(
    nuevoProducto(product.name, product.imageUrl, product.price, product.id)
  );
});

const Consolas = document.querySelector("#Consolas");
consoleProducts.forEach((product) => {
  Consolas.appendChild(
    nuevoProducto(product.name, product.imageUrl, product.price, product.id)
  );
});

const Diversos = document.querySelector("#Diversos");
diverseProducts.forEach((product) => {
  Diversos.appendChild(
    nuevoProducto(product.name, product.imageUrl, product.price, product.id)
  );
});
