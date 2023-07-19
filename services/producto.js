export default async function producto(id) {
  return await fetch(`https://alurageekapi.gregorypf.site/productos/${id}`)
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.log(err));
}
