export default function adminProductMaker(name, imageUrl, price, id) {
  const card = document.createElement("div");
  const content = `
	<img class="product-img" src="${imageUrl}" alt="">
	<h1 class="product-name">${name}</h1>
	<p class="product-price">${price}</p>
	<a class="product-link" href="./product.html?product_id=${id}">Ver Producto</a>
  <a class="product-del" href="#"></a>
  <a class="product-edit" href="./editProduct.html?product_id=${id}"></a>`;

  card.innerHTML = content;
  card.classList.add("product");
  card.dataset.id = id;

  return card;
}
