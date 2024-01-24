"use strict";

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const burgerButton = document.getElementById("burgerButton");
  const navigation = document.querySelector(".navigation");
  const navItems = document.querySelectorAll(".navigation li");

  // Toggle navigation menu on burger button click
  burgerButton.addEventListener("click", function () {
    navigation.classList.toggle("show-nav");
  });

  // Close navigation menu when a list item is clicked
  navItems.forEach(function (item) {
    item.addEventListener("click", function () {
      navigation.classList.remove("show-nav");
    });
  });
});
