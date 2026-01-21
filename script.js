const panels = document.querySelectorAll(".panel");
const textEl = document.querySelector(".img-text");

panels.forEach(panel => {
  panel.addEventListener("click", () => {
    panels.forEach(p => p.classList.remove("active"));
    panel.classList.add("active");

    // UPDATE THE FIRST (AND ONLY) img-text
    textEl.innerText = panel.dataset.text;
  });
});
