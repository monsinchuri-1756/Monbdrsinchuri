const menuBtn = document.getElementById("menu-toggle");
const dashboard = document.getElementById("dashboard");
const mobileCenter = document.getElementById("mobile-center");
const closeBtn = document.getElementById("close-btn");

menuBtn.addEventListener("click", () => {
  dashboard.classList.add("show");
  mobileCenter.classList.add("hide");
});

closeBtn.addEventListener("click", () => {
  dashboard.classList.remove("show");
  mobileCenter.classList.remove("hide");
});
