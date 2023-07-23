import { adminServices } from "../services/admin-service.js";
const newProductForm = document.querySelector(".newProduct-form");
const productImgUrl = document.querySelector("#URL");
const productCategory = document.querySelector("#Category");
const productName = document.querySelector("#productName");
const productPrice = document.querySelector("#productPrice");
const productDesc = document.querySelector("#description");
const tkn = JSON.parse(localStorage.getItem("tkn"));
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("product_id");

const productToEdit = await adminServices.getOne(tkn, productId);

productImgUrl.value = productToEdit.imageUrl;
productCategory.value = productToEdit.category;
productName.value = productToEdit.name;
productPrice.value = parseInt(productToEdit.price.replace("$", ""));
productDesc.innerHTML = productToEdit.description;

newProductForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(e.target);

  const response = await adminServices.editProduct(
    tkn.accessToken,
    data.get("productName"),
    data.get("productPrice"),
    data.get("Category"),
    data.get("description"),
    data.get("URL"),
    productToEdit.id
  );

  if (response.status === 200) {
    console.log(response.status);
    location.href = "./admin.html";
  } else {
    console.log(response);
  }
});
