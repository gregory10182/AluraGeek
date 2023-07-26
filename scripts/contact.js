const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const mailTo = document.querySelector("#mailTo");

  const data = new FormData(e.target);

  mailTo.setAttribute(
    "href",
    `mailto:Gregory10183@gmail.com?subject=${data.get("name")}&body=${data.get(
      "message"
    )}`
  );

  mailTo.click();
});
