function initThemeToggle() {
    const toggleBtn = document.getElementById("theme-toggle");
    const body = document.body;

    function applyTheme(isDark) {
        body.classList.toggle("dark-mode", isDark);
        toggleBtn.textContent = "Theme";
        localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
    }

    const savedTheme = localStorage.getItem("portfolio-theme") || "light";
    applyTheme(savedTheme === "dark");

    toggleBtn.addEventListener("click", function () {
        applyTheme(!body.classList.contains("dark-mode"));
    });
}
