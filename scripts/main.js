const shareButton = document.querySelector("button");
const socialMenu = document.querySelector("#social-menu");
const socialIcons = document.querySelectorAll("ul svg");
const articleShare = document.querySelector(".article-share");
const articleMain = document.querySelector(".article-main");
const author = document.querySelector(".author");

shareButton.addEventListener("click", () => {
  socialMenu.classList.toggle("social-menu-active");
  articleShare.classList.toggle("article-share-active");
  articleMain.classList.toggle("article-main-active");
  shareButton.classList.toggle("button-active");
  author.classList.toggle("author-active");

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

  if (socialMenu.hasAttribute("tabindex")) {
    socialMenu.removeAttribute("tabindex");
  } else {
    socialMenu.setAttribute("tabindex", "-1");
    socialMenu.focus();
    socialMenu.style.outline = "none";
  }
});
