(() => {
    const toggle = document.getElementById("theme-toggle");
    if (!toggle) return;

    const icon = toggle.querySelector("i");
    const label = toggle.querySelector("span");
    const storageKey = "portfolio-theme";

    function applyTheme(theme) {
        const isDark = theme === "dark";
        document.body.classList.toggle("dark-mode", isDark);
        toggle.setAttribute("aria-pressed", String(isDark));
        toggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
        if (icon) {
            icon.classList.toggle("fa-moon", !isDark);
            icon.classList.toggle("fa-sun", isDark);
        }
        if (label) label.textContent = isDark ? "Light mode" : "Dark mode";
    }

    let savedTheme = "light";
    try {
        savedTheme = localStorage.getItem(storageKey) || "light";
    } catch (error) {
        // Theme still works for this page when browser storage is unavailable.
    }
    applyTheme(savedTheme === "dark" ? "dark" : "light");

    toggle.addEventListener("click", () => {
        const nextTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";
        applyTheme(nextTheme);
        try {
            localStorage.setItem(storageKey, nextTheme);
        } catch (error) {
            // The selected theme remains active until the page is reloaded.
        }
    });
})();
