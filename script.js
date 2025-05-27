// handle scroll top btn
const handleListenScrollTopButton = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // for smooth scrolling effect
  });
};

// handle open menu
const handleToggleMainMenu = () => {
  const headerMainMenuEl = document.querySelector("#header-main__menu ul");
  headerMainMenuEl.classList.toggle("active");
};

// loaded DOM
document.addEventListener("DOMContentLoaded", (event) => {
  const btnScrollTop = document.querySelector("#social-scroll-top");
  btnScrollTop.addEventListener("click", handleListenScrollTopButton);

  // Show or hide the button depending on scroll position
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
      btnScrollTop.style.display = "block"; // Show the button
    } else {
      btnScrollTop.style.display = "none"; // Hide the button
    }
  };

  // show hide menu bar responsesive
  const btnBarMenu = document.getElementById("btn-menu__bar");
  btnBarMenu.addEventListener("click", handleToggleMainMenu);

  // handle scroll fixed header
  const headerMainEl = document.querySelector("header .header-menu");
  const headerTopEl = document.querySelector("header .header__top-content");
  const mainContentEl = document.querySelector("#main");

  window.addEventListener("scroll", function () {
    if (window.scrollY >= headerTopEl.offsetHeight) {
      headerMainEl.classList.add("fixed");

      // Adjust the top margin of the main content to prevent overlap
      mainContentEl.style.marginTop = `${headerMainEl.offsetHeight}px`;
    } else {
      headerMainEl.classList.remove("fixed");

      // Reset the top margin of the main content
      mainContentEl.style.marginTop = "0";
    }
  });
});

  // click to documents
  document.addEventListener("click", function (event) {
    const headerMainMenuEl = document.querySelector("#header-main__menu ul");
    const btnBarMenu = document.getElementById("btn-menu__bar");

    // Check if the clicked target is outside the menu
    if (
      !headerMainMenuEl?.contains(event.target) &&
      !btnBarMenu?.contains(event.target)
    ) {
      headerMainMenuEl.classList.remove("active");
    }
  });
