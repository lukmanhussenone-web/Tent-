const menuToggle = document.querySelector(".menu-toggle");
const unList = document.querySelector("header ul");
const hamburger = document.querySelector(".hamburger-icon"); // Added missing dot
const cross = document.querySelector(".cross-icon");

menuToggle.addEventListener("click", () => {
  // Changed 'navLinks' to 'unList' to match your variable declaration
  unList.classList.toggle("show");

  if (unList.classList.contains("show")) {
    hamburger.style.display = "none";
    cross.style.display = "block";
  } else {
    hamburger.style.display = "block";
    cross.style.display = "none";
  }
});
