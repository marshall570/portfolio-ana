window.addEventListener("scroll", () => {
  const navbar = document.querySelector(
    "body > header > nav"
  );
  const header = document.querySelector("header").getBoundingClientRect();

  if (
    document.body.scrollTop <= header.bottom - 60 ||
    document.documentElement.scrollTop <= header.bottom - 60
  ) {
    navbar.style.backgroundImage = "";
  } else {
    navbar.style.backgroundImage =
      "linear-gradient(0,rgba(0, 142, 118, 1) 0%, rgba(30, 72, 71, 1) 90%)";
  }
});
