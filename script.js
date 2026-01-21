const panels = document.querySelectorAll(".panel");

// create text for default active
setActiveText(document.querySelector(".panel.active"));

panels.forEach(panel => {
  panel.addEventListener("click", () => {
    panels.forEach(p => p.classList.remove("active"));
    panel.classList.add("active");
    setActiveText(panel);
  });
});

function setActiveText(panel) {
  // REMOVE all existing img-text nodes
  document.querySelectorAll(".img-text").forEach(el => el.remove());

  // ADD text ONLY for active panel
  const h3 = document.createElement("h3");
  h3.className = "img-text";
  h3.innerText = panel.dataset.text;
  panel.appendChild(h3);
}
