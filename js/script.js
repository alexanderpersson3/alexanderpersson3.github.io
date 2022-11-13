if (CSS && CSS.registerProperty) {
  window.CSS.registerProperty({
    name: "--angle-1",
    syntax: "<angle>",
    inherits: false,
    initialValue: "0deg",
  });

  window.CSS.registerProperty({
    name: "--angle-2",
    syntax: "<angle>",
    inherits: false,
    initialValue: "0deg",
  });

  window.CSS.registerProperty({
    name: "--angle-3",
    syntax: "<angle>",
    inherits: false,
    initialValue: "0deg",
  });

  window.CSS.registerProperty({
    name: "--angle-4",
    syntax: "<angle>",
    inherits: false,
    initialValue: "0deg",
  });
}

window.addEventListener("load", () => {
  const theme = window.localStorage.getItem("theme");
  const checkbox = document.getElementById("dark-mode");

  const darkMode = document.querySelector(".dark-mode");
  if (checkbox) {
    checkbox.checked = theme === "dark";
    checkbox.addEventListener("change", function () {
      document.body.classList.remove("dark");
      if (this.checked) {
        window.localStorage.setItem("theme", "dark");
        document.body.classList.add("dark");
        darkMode.classList.add("on");
      } else {
        window.localStorage.setItem("theme", "light");
        darkMode.classList.remove("on");
      }
    });
  }

  document.body.classList.remove();
  if (darkMode) {
    darkMode.classList.remove();
  }

  if (theme === "dark") {
    document.body.classList.add("dark");
    darkMode.classList.add("on");
  }
});
