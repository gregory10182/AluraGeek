import { adminServices } from "../services/admin-service.js";
import adminProductMaker from "./divProductAdminMaker.js";

const tkn = JSON.parse(localStorage.getItem("tkn"));

const data = await adminServices.getAll(tkn.accessToken);

const productsGrid = document.querySelector(".products-grid");

if (data) {
  data.forEach((product) => {
    productsGrid.appendChild(
      adminProductMaker(
        product.name,
        product.imageUrl,
        product.price,
        product.id
      )
    );
  });
}
