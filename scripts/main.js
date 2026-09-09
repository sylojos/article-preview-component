const shareButton = document.querySelector("button");
const socialMenu = document.querySelector("#social-menu");
const socialIcons = document.querySelectorAll("ul svg");

shareButton.addEventListener("click", () => {
  socialMenu.classList.toggle("social-menu-active");

  const isMenuOpen = shareButton.getAttribute("aria-expanded") === "true";

  if (isMenuOpen) {
    shareButton.setAttribute("aria-expanded", "false");
  } else {
    shareButton.setAttribute("aria-expanded", "true");
  }

  socialIcons.forEach((socialIcon) => {
    if (socialIcon.hasAttribute("aria-hidden")) {
      socialIcon.removeAttribute("aria-hidden");
    } else {
      socialIcon.setAttribute("aria-hidden", "true");
    }
  });
});
