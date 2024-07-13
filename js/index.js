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

document.addEventListener("DOMContentLoaded", () => {
  const bookmarkIcons = document.querySelectorAll(
    ".card-bookmark-icon, .card-bookmark-icon-checked"
  );

  bookmarkIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      if (icon.classList.contains("card-bookmark-icon")) {
        icon.classList.remove("card-bookmark-icon");
        icon.classList.add("card-bookmark-icon-checked");
        icon.src =
          "https://img.icons8.com/?size=100&id=6g3r9r3bnFU9&format=png&color=FA5252";
      } else {
        icon.classList.remove("card-bookmark-icon-checked");
        icon.classList.add("card-bookmark-icon");
        icon.src =
          "https://img.icons8.com/?size=100&id=sbP8MaAzMcPh&format=png&color=000000";
      }
    });
  });
});
