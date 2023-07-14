import productos from "../services/productos.js";

const productData = await productos();
const starWarsProducts = productData.filter(
  (product) => product.category === "StarWars"
);
const consoleProducts = productData.filter(
  (product) => product.category === "Consolas"
);
const diverseProducts = productData.filter(
  (product) => product.category === "Diversos"
);

const nuevoProducto = (name, imageUrl, price, id) => {
  const card = document.createElement("div");
  const content = `
	<img class="product-img" src="${imageUrl}" alt="">
	<h1 class="product-name">${name}</h1>
	<p class="product-price">${price}</p>
	<a class="product-link" href="#">Ver Producto</a>`;

  card.innerHTML = content;
  card.classList.add("product");
  card.dataset.id = id;

  return card;
};

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
