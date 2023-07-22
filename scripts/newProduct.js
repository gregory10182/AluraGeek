import { adminServices } from "../services/admin-service.js";
const newProductForm = document.querySelector(".newProduct-form");
const tkn = JSON.parse(localStorage.getItem("tkn"));

newProductForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(e.target);

  console.log(
    `image: ${data.get("URL")} | categoria: ${data.get(
      "Category"
    )} | Nombre: ${data.get("productName")} | precio: ${data.get(
      "productPrice"
    )} | desc: ${data.get("description")}`
  );

  const product = await adminServices.createProduct(
    tkn.accessToken,
    data.get("productName"),
    data.get("productPrice"),
    data.get("Category"),
    data.get("description"),
    data.get("URL"),
    uuid.v4()
  );

  console.log(product);

  location.href = "./admin.html";
});
