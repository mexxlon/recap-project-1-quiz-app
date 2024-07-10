document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    const hide = answer.style.display === "none" || !answer.style.display;
    answer.style.display = hide ? "block" : "none";
    button.textContent = hide ? "Hide answer" : "Show answer";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const allIcons = document.querySelectorAll(".icon");
  allIcons.forEach((img) => {
    img.addEventListener("click", () => {
      img.classList.toggle("highlighted");
    });
  });
});
