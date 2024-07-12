document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    const hide = answer.style.display === "none" || !answer.style.display;
    answer.style.display = hide ? "block" : "none";
    button.textContent = hide ? "Hide answer" : "Show answer";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const icons = document.querySelectorAll(".icon");

  icons.forEach((icon) => {
    const link = icon.parentElement;
    if (link.pathname === window.location.pathname) {
      icon.classList.add("active");
    }

    link.addEventListener("click", (event) => {
      icons.forEach((i) => i.classList.remove("active"));
      icon.classList.add("active");
      window.location.pathname === link.pathname;
    });
  });
});
