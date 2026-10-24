const menuButton = document.getElementById("menu-button");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", function () {
  navigation.classList.toggle("show");

  const isOpen = navigation.classList.contains("show");

  menuButton.setAttribute("aria-expanded", isOpen);

  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu",
  );

  const menuIcon = menuButton.querySelector("img");

  menuIcon.src = isOpen ? "images/icon-menu-close.svg" : "images/icon-menu.svg";
});

/* Close the mobile menu after clicking a link */
const navigationLinks = navigation.querySelectorAll("a");

navigationLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navigation.classList.remove("show");

    menuButton.setAttribute("aria-expanded", "false");

    menuButton.setAttribute("aria-label", "Open navigation menu");

    menuButton.querySelector("img").src = "images/icon-menu.svg";
  });
});
