const publicationsMenu = document.querySelector(".publication-nav");
const summary = publicationsMenu.querySelector("summary");

publicationsMenu.addEventListener("pointerenter", (event) => {
  if (event.pointerType === "mouse") publicationsMenu.open = true;
});

publicationsMenu.addEventListener("pointerleave", (event) => {
  if (event.pointerType === "mouse" && !publicationsMenu.contains(document.activeElement)) {
    publicationsMenu.open = false;
  }
});

publicationsMenu.addEventListener("focusout", (event) => {
  if (!publicationsMenu.contains(event.relatedTarget) && !publicationsMenu.matches(":hover")) {
    publicationsMenu.open = false;
  }
});

publicationsMenu.addEventListener("click", (event) => {
  if (event.target.closest("a")) publicationsMenu.open = false;
});

document.addEventListener("pointerdown", (event) => {
  if (!publicationsMenu.contains(event.target)) publicationsMenu.open = false;
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape" || !publicationsMenu.open) return;

  if (publicationsMenu.contains(document.activeElement)) summary.focus();
  publicationsMenu.open = false;
});
