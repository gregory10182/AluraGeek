const getAll = async () => {
  return await fetch("https://alurageekapi.gregorypf.site/productos")
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.log(err));
};

const getOne = async (id) => {
  return await fetch(`https://alurageekapi.gregorypf.site/productos/${id}`)
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.log(err));
};

export const productServices = {
  getAll,
  getOne,
};
