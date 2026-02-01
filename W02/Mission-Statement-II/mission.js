const selectElem = document.querySelector("#themeSelect");
const logo = document.querySelector("#logo");

document.querySelector("#year").textContent = new Date().getFullYear();

const lightLogo = "images/byui-logo-blue.png";
const darkLogo = "images/byui-logo-white.png";

selectElem.addEventListener("change", changeTheme);

function changeTheme() {
  const current = selectElem.value;

  if (current === "dark") {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    logo.src = darkLogo;
  } else if (current === "light") {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    logo.src = lightLogo;
  } else {
    document.body.classList.remove("dark");
    document.body.classList.remove("light");
    logo.src = lightLogo;
  }
}
