const getAll = async (tkn) => {
  return await fetch("https://alurageekapi.gregorypf.site/660/productos", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${tkn}`,
    },
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.log(err));
};

const createProduct = async (
  tkn,
  name,
  price,
  category,
  description,
  imageUrl,
  id
) => {
  return await fetch(`https://alurageekapi.gregorypf.site/660/productos`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${tkn}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      name,
      price: `$${price}`,
      category,
      description,
      imageUrl,
    }),
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.log(err));
};

export const adminServices = {
  getAll,
  createProduct,
};
