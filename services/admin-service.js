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

const getOne = async (tkn, id) => {
  return await fetch(
    `https://alurageekapi.gregorypf.site/660/productos/${id}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${tkn}`,
      },
    }
  )
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.log(err));
};

export const adminServices = {
  getAll,
  getOne,
};
