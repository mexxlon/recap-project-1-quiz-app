document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    const hide = answer.style.display === "none" || !answer.style.display;
    answer.style.display = hide ? "block" : "none";
    button.textContent = hide ? "Hide answer" : "Show answer";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const icons = document.querySelectorAll(".navigation-bar .icon");
  const removeAllActive = () => {
    icons.forEach((i) => i.classList.remove("active"));
  };

  icons.forEach((icon) => {
    icon.addEventListener("click", (event) => {
      event.preventDefault();

      removeAllActive();

      icon.classList.add("active");
    });
  });

  const currentPage = window.location.pathname;
  icons.forEach((icon) => {
    // Vergleichen des href jedes Icons mit dem aktuellen Seitenpfad
    if (icon.parentElement.pathname === currentPage) {
      icon.classList.add("active");
    }
  });
});
