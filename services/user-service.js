const login = async (email, password) => {
  return await fetch("https://alurageekapi.gregorypf.site/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((res) => res)
    .catch((err) => err);
};

export const userServices = {
  login,
};
