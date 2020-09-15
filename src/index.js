import renderHome from "./home";
import renderMenu from "./menu";
import renderContact from "./contact";

renderHome();

let tabLinks = document.querySelectorAll(".nav-link");
let content = document.getElementById("content");

tabLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    if (e.target.textContent === "Home") {
      removeActive();
      e.target.classList.add("active");
      renderPage(content, renderHome);
    }

    if (e.target.textContent === "Menu") {
      removeActive();
      e.target.classList.add("active");
      renderPage(content, renderMenu);
    }

    if (e.target.textContent === "Contact") {
      removeActive();
      e.target.classList.add("active");
      renderPage(content, renderContact);
    }
  });
});

const renderPage = (location, page) => {
  location.innerHTML = "";
  page();
};

const removeActive = () => {
  tabLinks.forEach((link) => {
    if (link.classList.contains("active")) {
      link.classList.remove("active");
    }
  });
};

$(".carousel").carousel();
