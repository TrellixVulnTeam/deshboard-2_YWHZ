let a = document.querySelector("#home");
let b = document.querySelector(".navlist");
a.addEventListener("click", () => {
  b.classList.toggle("active");
});
