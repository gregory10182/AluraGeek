export default async function productos() {
  return await fetch("http://localhost:3000/productos")
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.log(err));
}
