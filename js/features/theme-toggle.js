function initThemeToggle() {

    const toggleBtn =
        document.getElementById("theme-toggle");

    const htmlElement =
        document.documentElement;

    // Get Saved Theme
    const savedTheme =
        localStorage.getItem("portfolio-theme");

    // DEFAULT = DARK
    if (savedTheme === "light") {

        // LIGHT MODE
        htmlElement.classList.remove("dark");

        toggleBtn.textContent = "Light Mode";

    } else {

        // DARK MODE
        htmlElement.classList.add("dark");

        toggleBtn.textContent = "Dark Mode";
    }

    // Toggle Theme
    toggleBtn.addEventListener("click", () => {

        // IF DARK EXISTS → SWITCH TO LIGHT
        if (htmlElement.classList.contains("dark")) {

            htmlElement.classList.remove("dark");

            localStorage.setItem(
                "portfolio-theme",
                "light"
            );

            toggleBtn.textContent =
                "light Mode";

        }

        // OTHERWISE SWITCH TO DARK
        else {

            htmlElement.classList.add("dark");

            localStorage.setItem(
                "portfolio-theme",
                "dark"
            );

            toggleBtn.textContent =
                "Dark Mode";
        }
    });
}

// Initialize
document.addEventListener(
    "DOMContentLoaded",
    initThemeToggle
);