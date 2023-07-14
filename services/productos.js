export default async function productos() {
  return await fetch("https://alurageekapi.gregorypf.site/productos")
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.log(err));
}
