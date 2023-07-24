import { adminServices } from "../services/admin-service.js";
const productImgUrl = document.querySelector(".deleteProduct-img");
const productName = document.querySelector(".deleteProduct-texts-name");
const productId = document.querySelector(".deleteProduct-texts-id");
const yesButton = document.querySelector(".deleteProduct-buttons-yes");
const noButton = document.querySelector(".deleteProduct-buttons-no");
const urlParams = new URLSearchParams(window.location.search);
const tkn = JSON.parse(localStorage.getItem("tkn"));
const id = urlParams.get("product_id");

const productToEdit = await adminServices.getOne(tkn, id);

productImgUrl.src = productToEdit.imageUrl;
productId.innerHTML = `ID: ${productToEdit.id}`;
productName.innerHTML = `Nombre: ${productToEdit.name}`;

yesButton.addEventListener("click", async () => {
  const response = await adminServices.deleteProduct(id);

  console.log(response);
  if (response.status === 200) {
    location.href = "./admin.html";
  } else {
    console.log(response);
  }
});

noButton.addEventListener("click", () => {
  location.href = "./admin.html";
});
