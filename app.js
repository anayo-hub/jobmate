// hambugerr code
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

function toggleMenu() {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
}

hamburger.addEventListener("click", toggleMenu);

// Support keyboard accessibility (Enter or Space)
hamburger.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    toggleMenu();
  }
});

// Optional: Close menu when clicking a nav link (mobile)
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
  });
});

// end of hambuger code

// Header Code

const header = document.querySelector("header");
const logo = document.querySelector(".logo");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("fixed");
    logo.style.color = "#0d6efd";
    navLinks.forEach((link) => {
      link.style.color = "white";
    });
  } else {
    header.classList.remove("fixed");
    logo.style.color = "#0d6efd";
    navLinks.forEach((link) => {
      link.style.color = "white";
    });
  }
});

const scrollContainer = document.getElementById("scrollCards");

function scrollLeft() {
  scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
}

function scrollRight() {
  scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", function () {
  // Only initialize if the component exists on the page
  const tabbedContent = document.querySelector(".tabbed-content-block");
  if (!tabbedContent) return;

  const tabBtns = tabbedContent.querySelectorAll(".tab-btn");
  const tabContents = tabbedContent.querySelectorAll(".tab-content");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove active class from all buttons and contents
      tabBtns.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      // Add active class to clicked button
      this.classList.add("active");

      // Show corresponding content
      const tabId = this.getAttribute("data-tab");
      document.getElementById(tabId).classList.add("active");

      // Scroll the active tab into view on mobile
      if (window.innerWidth <= 768) {
        this.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    });
  });
});
