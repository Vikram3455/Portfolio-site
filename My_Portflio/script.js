console.log("Portfolio Loaded Successfully");

document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    console.log("Navigating...");
  });
});
window.addEventListener("load", () => {
  document
    .querySelectorAll(".animate-text, .animate-img")
    .forEach((el) => el.classList.add("animate-show"));
});